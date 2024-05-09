import { transportations, periods } from '../services/TransportService';
import { BaseHandler } from './BaseHandler';

import { Request } from './types/Request';

export class CarNightFare extends BaseHandler {
	canHandle(request: Request): boolean {
		return request.period === 'night' && request.type === 'car';
	}
	execute(request: Request): { type: transportations; period: periods; total: number; } {
		return {
			type: request.type,
			period: request.period,
			total: request.data * 1.2
		};
	}
}