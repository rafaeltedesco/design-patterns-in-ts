import { IUserService } from './IUserService';
import { UserService } from './UserService';

export class UserServiceProxyCached implements IUserService {

	private cachedData: any;

	constructor(private readonly userService = new UserService()) { }

	async getUserInfo(id: number): Promise<any> {

		if (this.cachedData) {
			console.log('devolvendo do cache');
			return this.cachedData;
		}
		// before
		const response = await this.userService.getUserInfo(id);

		this.cachedData = response;

		return response;
		// after
	}
}