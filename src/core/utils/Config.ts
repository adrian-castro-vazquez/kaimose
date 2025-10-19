/**
 * Configuration management using dotenv (to be added later).
 * Currently returns placeholder values.
 */

export class Config {
	static get(key: string, fallback?: string): string {
		return process.env[key] || fallback || "";
	}
}