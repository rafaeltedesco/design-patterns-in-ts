import { AxiosClient } from './AxiosClient';

export type Person = {
	name: string,
	height: string,
	gender: string
}

export class PersonFetcher {
	private fetcher: AxiosClient;

	constructor() {
		this.fetcher = new AxiosClient();
	}

	async fetchPerson(personId: number): Promise<Person> {
		const response = await this.fetcher.fetch(`https://swapi.dev/api/people/${personId}`) as Person;
		return {
			name: response.name,
			height: response.height,
			gender: response.gender
		};
	}
}