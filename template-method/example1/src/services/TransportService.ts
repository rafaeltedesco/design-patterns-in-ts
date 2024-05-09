import { Request } from '../cor/types/Request';
import { Response } from '../cor/types/Response';
import { BaseHandler } from '../cor/BaseHandler';

export type transportations = 'car' | 'ship' | 'airplane' | 'default';
export type periods = 'night' | 'morning' | 'afternoon';

export class TransportService {
	private handler?: BaseHandler;


	constructor(handler: BaseHandler) {
		this.handler = handler;
	}


	calculateFreight(request: Request): Response {
		return this.handler!.handle(request);
	}
}