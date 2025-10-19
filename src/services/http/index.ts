/**
 * Registers the HTTP service when imported.
 */

import { ServiceRegistry } from "../../core/registry/ServiceRegistry";
import { HttpService } from "./HttpService";

ServiceRegistry.register("http", new HttpService());