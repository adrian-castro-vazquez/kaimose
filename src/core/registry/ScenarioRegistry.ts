/**
 * Registry for available scenarios.
 * Each scenario is an object defining metadata and an executable function.
 */

import { ScenarioDefinition } from "./types";

export class ScenarioRegistry {
	private static scenarios: Map<string, ScenarioDefinition> = new Map();

	static register(scenario: ScenarioDefinition) {
		this.scenarios.set(scenario.name, scenario);
	}

	static get(name: string): ScenarioDefinition | undefined {
		return this.scenarios.get(name);
	}

	static list(): string[] {
		return Array.from(this.scenarios.keys());
	}
}