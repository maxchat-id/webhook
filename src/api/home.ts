import { Request, Response } from "polka"

export const homeHandler = (_req: Request, res: Response) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ message: "Hi" }));
};
