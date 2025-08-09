import app from "./app";
import envs from "./environment/envs";

function startServer() {
  app.listen({ port: envs.PORT }, (err) => {
    if (err) {
      console.log("Fail Process To Start Server");
      process.exit(1);
    }
    console.log(`Server listening on ${envs.PORT}`);
  });
}

startServer();
