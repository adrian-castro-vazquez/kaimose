/**
 * Shared type definitions for core components.
 */

export interface ScenarioContext {
	log: (msg: string) => void;
	[key: string]: unknown;
}

export interface ScenarioDefinition {
	name: string;
	description?: string;
	services?: string[];
	run: (ctx: ScenarioContext) => Promise<unknown>;
}