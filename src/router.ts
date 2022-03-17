import { Polka } from "polka";
import { homeHandler } from "./api/home";
import { webhookHandler } from "./api/webhook";
export const router = (app: Polka) => {
  app.get("/", homeHandler);
  app.post(`/webhook`, webhookHandler);
};
