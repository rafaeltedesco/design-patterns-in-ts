import { transportations, periods } from '../services/TransportService';
import { BaseHandler } from './BaseHandler';
import { Handler } from './Handler';


import { Request } from './types/Request';


export class ShipMorningFare extends BaseHandler {
	nextHandler?: Handler<Request>;
	canHandle(request: Request): boolean {
		return request.type === 'ship' && request.period === 'morning';
	}
	execute(request: Request): { type: transportations; period: periods; total: number; } {
		return {
			type: request.type,
			period: request.period,
			total: request.data * 1.65
		};
	}

}