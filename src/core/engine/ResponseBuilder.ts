/**
 * Normalizes responses for CLI, API, or logs.
 * Future versions may include structured output (JSON, YAML, etc.)
 */

export class ResponseBuilder {
	static format(data: unknown): string {
		return JSON.stringify(data, null, 2);
	}
}