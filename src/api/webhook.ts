import { Request, Response } from "polka";

import { bodyParser, jsonResponse } from "../utils";

export const webhookHandler = async (req: Request, res: Response) => {
  const body = await bodyParser(req);
  console.log("Webhook", "incoming message", JSON.parse(body));

  jsonResponse(res, { status: "Ok" });
};
