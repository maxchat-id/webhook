import polka, { Request, Response } from "polka";

const onNoMatch = (_: Request, res: Response) => {
  res.writeHead(404, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ message: "404" }));
};

export const app = () => polka({ onNoMatch });
