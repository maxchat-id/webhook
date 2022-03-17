import { app as App } from "./app";
import { router } from "./router";

const port = 8080;

const run = () => {

  const app = App();

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
