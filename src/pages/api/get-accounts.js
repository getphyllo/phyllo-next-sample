// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const PHYLLO_GET_ACCOUNTS_URL = "https://api.sandbox.getphyllo.com/v1/accounts";

// Kindly create an env file and pass your crendentials from there.
const PHYLLO_CLIENT_ID = process.env.PHYLLO_CLIENT_ID;
const PHYLLO_SECRET_ID = process.env.PHYLLO_SECRET_ID;

export default async function handler(req, res) {
  let headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(PHYLLO_CLIENT_ID + ":" + PHYLLO_SECRET_ID));
  headers.set("Content-Type", "application/json");

  const { user_id } = req.query;
  if (req.method === "GET") {
    try {
      const response = await fetch(`${PHYLLO_GET_ACCOUNTS_URL}?user_id=${user_id}`, {
        method: "GET",
        headers: headers,
      });
      const result = await response.json();
      return res.status(response.status).json(result);
      // return res.json({ userId: req.query });
    } catch (err) {
      return res.status(err.status).json(err);
    }
  }
}
