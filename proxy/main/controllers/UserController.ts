import { Request, Response } from 'express';
import { IUserService } from '../services/IUserService';

export class UserController {

	private userService: IUserService;

	constructor(userService: IUserService) {
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