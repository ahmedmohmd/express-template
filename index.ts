import express from "express";
import { z } from "zod";
import { config } from "./config/config";
import { ENV } from "./config/env";
import bootstrap from "./src/bootstrap";
import { validateRequestBody } from "./src/common/middleware/validate-request-body.middleware";
import logger from "./src/logging";

const app = express();
app.use(express.json());

// Handle Important Configs
bootstrap.handleCompression(app);
bootstrap.handleCors(app);
bootstrap.handleSecurity(app);
bootstrap.handleRateLimiting(app);

// All App Routes

const schema = z.object({
	email: z.string().email(),
	password: z.string(),
});

app.post(`/api`, validateRequestBody(schema), (req, res) => {
	const { email } = req.body;
	res.send(`Hello, ${email}`);
});

// Handle Global Errors
bootstrap.handleRoutes(app);

// App Listening Configs
const port = Number(ENV.PORT) || config.defaults.port;
app.listen(port, () => {
	logger.general.info(`listening on ${config.apiEndPoint}.`);
});
