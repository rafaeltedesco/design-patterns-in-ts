import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {

	private userService: UserService;

	constructor(userService: UserService) {
		this.userService = userService;
	}

	async getUser(req: Request, res: Response) {
		const { id } = req.params;
		const response = await this.userService.getUserInfo(+id);
		if (response.error) {
			return res.status(response.error.status).json(response.error.data);
		}
		return res.json(response);
	}
}