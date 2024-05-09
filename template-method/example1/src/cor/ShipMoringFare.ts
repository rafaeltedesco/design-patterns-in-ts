import { Handler } from './Handler';
import { periods, transportations } from '../services/TransportService';

import { Request } from './types/Request';
import { Response } from './types/Response';

export class ShipMorningFare implements Handler<Request> {
	nextHandler?: Handler<Request>;
	canHandle(request: Request): boolean {
		return request.type === 'ship' && request.period === 'morning';
	}

	setNext(handler: Handler<Request>): void {
		this.nextHandler = handler;
	}

	hasNext(): boolean {
		return !!this.nextHandler;
	}
	handle(request: Request): Response {
		if (this.canHandle(request)) {
			return {
				type: request.type,
				period: request.period,
				total: request.data * 1.65
			};
		}
		if (this.hasNext()) {
			console.log(`[${ShipMorningFare.name}] não pode tratar. Chamando próximo...`);
			return this.nextHandler!.handle(request);
		}

		return {
			type: 'default',
			period: 'morning',
			total: request.data
		}
	}

}