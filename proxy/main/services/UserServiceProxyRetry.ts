import { IUserService } from './IUserService';
import { UserService } from './UserService';

export class UserServiceProxyRetry implements IUserService {

	private maxRetries = 3;
	private delay = 300;

	constructor(private readonly userService = new UserService()) { }

	private async retryWithBackOff(id: number, attempt: number): Promise<any> {
		try {
			const response = await this.userService.getUserInfo(id);
			if (!response.error) {
				return response;
			}
			else {
				throw new Error(response.error);
			}
		} catch (err) {
			if (attempt < this.maxRetries) {
				const delay = this.delay * Math.pow(2, attempt);
				const jitter = Math.random() * delay;
				const retryDelay = delay + jitter;
				console.log(`Retrying... Attempt ${attempt + 1} after ${retryDelay}ms`);
				await new Promise(resolve => setTimeout(resolve, retryDelay));
				return this.retryWithBackOff(id, attempt + 1);
			}
			else {
				return {
					error: {
						status: 503,
						data: {
							message: 'Cannot get data from api even after some retries'
						}
					}

				}
			}
		}
	}

	async getUserInfo(id: number): Promise<any> {
		return this.retryWithBackOff(id, 0);

	}
}