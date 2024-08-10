import express from "express";
import "express-async-errors";
import { config } from "./config/config";
import { ENV } from "./config/env";
import bootstrap from "./src/bootstrap";
import logger from "./src/logging";

const app = express();
app.use(express.json());

// Handle Important Configs
bootstrap.handleCompression(app);
bootstrap.handleCors(app);
bootstrap.handleSecurity(app);
bootstrap.handleRateLimiting(app);

// All App Routes
bootstrap.handleRoutes(app);

// App Listening Configs
const port = Number(ENV.PORT) || config.defaults.port;
app.listen(port, () => {
	logger.general.info(`listening on ${config.apiEndPoint}.`);
});
