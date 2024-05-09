import axios from 'axios';

export class AxiosClient {
	async fetch(url: string) {
		const { data } = await axios.get(url);
		return data;
	}
}