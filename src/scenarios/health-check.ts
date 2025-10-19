/**
 * Example scenario: health-check
 * Demonstrates the minimal structure of a scenario definition.
 */

import { ScenarioRegistry } from "../core/registry/ScenarioRegistry";

ScenarioRegistry.register({
	name: "health-check",
	description: "Simple example scenario to verify system setup.",
	run: async (ctx) => {
		ctx.log("Health check successful.");
		return { status: "ok" };
	},
});