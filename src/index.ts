import { app as App } from "./app";
import { logger } from "./middleware/logger";
import { router } from "./router";

const port = 8080;

const run = () => {

  const app = App();

  // middleware
  app.use(logger);

  router(app);

  app.listen(port, () => {
    console.log(`[Index] Running on localhost: ${port}`)
  });
};

run();

process.on("SIGINT", () => {
  process.exit(1);
});

process.on("exit", () => {
});
