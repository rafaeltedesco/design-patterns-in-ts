import { URL } from 'url';
import { Api } from '../utils/Api';
import { IUserService } from './IUserService';

export class UserService implements IUserService {

	private api: Api = new Api();

	async getUserInfo(id: number) {
		const response = await this.api.get(new URL(`http://localhost:8080/users/${id}`));
		return response.error ? response : response.data;
	}
}