export interface IUserService {
	getUserInfo(id: number): Promise<any>
}