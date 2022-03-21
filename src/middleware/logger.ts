import { NextHandler, Request, Response } from "polka";

export const logger = (req: Request, _res: Response, next: NextHandler) => {
  console.log(`~> Received ${req.method} on ${req.url}`);

  next();
}
