/**
 * Central registry for services (e.g., HTTP, Kafka, MQTT...).
 * Services are registered once and then retrieved by name.
 */

export class ServiceRegistry {
	private static services: Map<string, unknown> = new Map();

	static register(name: string, instance: unknown) {
		this.services.set(name, instance);
	}

	static get(name: string): unknown | undefined {
		return this.services.get(name);
	}

	static list(): string[] {
		return Array.from(this.services.keys());
	}
}