let headers = new Headers();
headers.set("Content-Type", "application/json");

const getHeaders = () => {
  let headers = new Headers();
  headers.set("Content-Type", "application/json");
  return headers;
};

const createUser = async (username, externalId) => {
  const userId = localStorage.getItem("PHYLLO_USER_ID");
  if (Boolean(userId)) {
    return userId;
  }
  try {
    const response = await fetch(`/api/create-user`, {
      method: "POST",
      body: JSON.stringify({
        name: username,
        external_id: externalId,
      }),
      headers: getHeaders(),
    });
    const result = await response.json();
    localStorage.setItem("PHYLLO_USER_ID", result.id);
    return result.id;
  } catch (err) {
    return err.body;
  }
};

const createUserToken = async (userId) => {
  const token = localStorage.getItem("PHYLLO_SDK_TOKEN");
  if (Boolean(token)) {
    return token;
  }
  try {
    const response = await fetch(`/api/create-token`, {
      method: "POST",
      body: JSON.stringify({
        user_id: userId,
        products: ["IDENTITY", "ENGAGEMENT"],
      }),
      headers: getHeaders(),
    });
    const result = await response.json();
    localStorage.setItem("PHYLLO_SDK_TOKEN", result.sdk_token);
    return result.sdk_token;
  } catch (err) {
    return err.body;
  }
};

const getAccounts = async (userId) => {
  try {
    const response = await fetch(`/api/get-accounts?user_id=${userId}`, {
      method: "GET",
      headers: getHeaders(),
    });
    const result = await response.json();
    return result.data;
  } catch (err) {
    return err.body;
  }
};

export { createUser, createUserToken, getAccounts };
