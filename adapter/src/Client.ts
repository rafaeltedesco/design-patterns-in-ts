import fs from 'node:fs/promises';
import { Person, PersonFetcher } from './PersonFetcher';

class Client {
	private personFetcher: PersonFetcher;

	constructor() {
		this.personFetcher = new PersonFetcher();
	}

	async execute() {
		const person = await this.personFetcher.fetchPerson(1);
		await this.appendPerson(person)
	}

	async appendPerson(person: Person) {
		const data = await fs.readFile('./people.json', 'utf-8');
		const db = JSON.parse(data);
		db.people.push(person);
		await fs.writeFile('./people.json', JSON.stringify(db, null, 2));
		console.log('saved');
	}


}

const client = new Client();
client.execute();