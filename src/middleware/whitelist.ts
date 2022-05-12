import { NextHandler, Request, Response } from "polka";

export const whitelist = (req: Request, _res: Response, next: NextHandler) => {
  console.log('~> Header ', req.headers['x-forwarded-for'] || req.socket.remoteAddress)

  next();
}
