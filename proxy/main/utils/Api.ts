import axios, { AxiosError, AxiosInstance } from 'axios';
import { URL } from 'url';

export class Api {
	private axios: AxiosInstance = axios;

	async get(url: URL) {
		try {
			const response = await this.axios.get(url.toString());
			return response.data;
		} catch (err) {
			const ex: AxiosError = err;
			return {
				error: {
					status: ex.response!.status,
					data: ex.response!.data
				}
			};
		}

	}
}