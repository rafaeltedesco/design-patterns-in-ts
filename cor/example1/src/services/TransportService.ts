import { Request } from '../cor/types/Request';
import { Handler } from '../cor/Handler';
import { Response } from '../cor/types/Response';

export type transportations = 'car' | 'ship' | 'airplane' | 'default';
export type periods = 'night' | 'morning' | 'afternoon';

export class TransportService {
	private handler?: Handler<Request>;


	constructor(handler: Handler<Request>) {
		this.handler = handler;
	}


	calculateFreight(request: Request): Response {
		return this.handler!.handle(request);
	}
}