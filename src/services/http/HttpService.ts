/**
 * Example service: HTTP mock service.
 * Will later provide methods to simulate HTTP endpoints.
 */

export class HttpService {
	get(url: string): unknown {
		console.log(`Mock GET ${url}`);
		return { url, data: "mock-response" };
	}
}