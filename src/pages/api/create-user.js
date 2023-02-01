// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const PHYLLO_CREATE_USER_URL = "https://api.sandbox.getphyllo.com/v1/users";

const PHYLLO_CLIENT_ID = process.env.PHYLLO_CLIENT_ID;
const PHYLLO_SECRET_ID = process.env.PHYLLO_SECRET_ID;

export default async function handler(req, res) {
  let headers = new Headers();
  headers.set("Authorization", "Basic " + btoa(PHYLLO_CLIENT_ID + ":" + PHYLLO_SECRET_ID));
  headers.set("Content-Type", "application/json");
  if (req.method === "POST") {
    try {
      const response = await fetch(`${PHYLLO_CREATE_USER_URL}`, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: headers,
      });
      const result = await response.json();
      return res.status(response.status).json(result);
    } catch (err) {
      return res.status(err.status).json(err);
    }
  }
  if (req.method === "GET") {
    try {
      const response = await fetch(`${PHYLLO_CREATE_USER_URL}`, {
        method: "GET",
        headers: headers,
      });
      const result = await response.json();
      return res.status(response.status).json(result);
    } catch (err) {
      return res.status(err.status).json(err);
    }
  }
}
