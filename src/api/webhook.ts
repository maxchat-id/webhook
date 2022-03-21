import { Request, Response } from "polka";

import { bodyParser, jsonResponse } from "../utils";

export const webhookPostHandler = async (req: Request, res: Response) => {
  const body = await bodyParser(req);
  console.log({body});
  console.log("Webhook", "incoming message", JSON.parse(body));

  jsonResponse(res, { status: "Ok" });
};

export const webhookGetHandler = async (req: Request, res: Response) => {
  const { query, params, search } = req;

  console.log({query, params, search});

  jsonResponse(res, { status: "Ok" });
};
