import { Polka } from "polka";
import { homeHandler } from "./api/home";
import { webhookGetHandler, webhookGupshupHandler } from "./api/webhook";
export const router = (app: Polka) => {
  app.get("/", homeHandler);
  app.post("/webhook", webhookGupshupHandler);
  app.post("/gupshup", webhookGupshupHandler);
  app.get("/webhook", webhookGetHandler);
};
