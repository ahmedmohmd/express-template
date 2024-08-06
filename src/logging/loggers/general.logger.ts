import { LogLevel } from "../enums/log-level.enum";
import { createCustomLogger } from "./custome.logger";

const generalLogger = createCustomLogger("general", LogLevel.INFO);

export { generalLogger };
