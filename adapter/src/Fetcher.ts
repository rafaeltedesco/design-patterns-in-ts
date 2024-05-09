import nodeFetch from 'node-fetch';
// Não pode mexer
export class Fetcher {
	async fetchWithNodeFetch(protocol: string, uri: string) {
		const response = await nodeFetch(`${protocol}://${uri}`)
		return response.text();
	}
}