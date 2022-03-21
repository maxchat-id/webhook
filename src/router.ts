import { Polka } from "polka";
import { homeHandler } from "./api/home";
import { webhookGetHandler, webhookPostHandler } from "./api/webhook";
export const router = (app: Polka) => {
  app.get("/", homeHandler);
  app.post("/webhook", webhookPostHandler);
  app.get("/webhook", webhookGetHandler);
};
