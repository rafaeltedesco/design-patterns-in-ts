import { Person } from './PersonFetcher';

export interface IFetcher {
	fetch(url: string): Promise<Person>
}