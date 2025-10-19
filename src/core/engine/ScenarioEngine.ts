/**
 * ScenarioEngine orchestrates scenario execution.
 * It uses the ScenarioRegistry and ServiceRegistry to resolve dependencies.
 */

import { ScenarioRegistry } from "../registry/ScenarioRegistry";
import { ScenarioContext } from "../registry/types";

export class ScenarioEngine {
	static async run(name: string): Promise<unknown> {
		const scenario = ScenarioRegistry.get(name);
		if (!scenario) throw new Error(`Scenario '${name}' not found`);

		const ctx: ScenarioContext = { log: console.log };
		ctx.log(`Running scenario: ${name}`);

		return await scenario.run(ctx);
	}
}