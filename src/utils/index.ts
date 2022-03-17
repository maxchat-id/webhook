import { Request, Response } from "polka";

export const bodyParser = async (req: Request) => {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  return Buffer.concat(buffers).toString();
};

export const jsonResponse = (res: Response, data: any, code = 200) => {
  res.writeHead(code, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(data));
}
