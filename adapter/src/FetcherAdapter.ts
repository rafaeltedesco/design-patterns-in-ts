import { Fetcher } from './Fetcher';
import { IFetcher } from './IFetcher';
import { Person } from './PersonFetcher';

export class FetcherAdapter implements IFetcher {
	private fetcher: Fetcher;

	constructor() {
		this.fetcher = new Fetcher();
	}

	async fetch(url: string): Promise<Person> {
		const [protocol, uri] = url.split('://');
		const data = JSON.parse((await this.fetcher.fetchWithNodeFetch(protocol, uri))) as Person;
		return {
			name: data.name,
			gender: data.gender,
			height: data.height
		}
	}

}