import { Request, Response } from "polka";
import axios from "axios"

import { bodyParser, jsonResponse } from "../utils";

export const webhookGupshupHandler = async (req: Request, res: Response) => {
  const body = await bodyParser(req);
  const payload = JSON.parse(body)
  console.log("Gupshup", payload);

  const forwardUrl = process.env.FORWARD_URL;

  if (typeof forwardUrl !== "undefined" && forwardUrl !== "") {
    try {
      await axios.post(forwardUrl, payload)
    } catch (err) {
      console.error(err)
    }
  }

  jsonResponse(res, { status: "Ok" });
};

export const webhookGetHandler = async (req: Request, res: Response) => {
  const { query, params, search } = req;

  console.log({query, params, search});

  jsonResponse(res, { status: "Ok" });
};
