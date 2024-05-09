import { Handler } from './Handler';

import { Request } from './types/Request';
import { Response } from './types/Response';


export class CarNightFare implements Handler<Request> {
	nextHandler?: Handler<Request>;
	canHandle(request: Request): boolean {
		return request.type === 'car' && request.period === 'night';
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
				total: request.data * 1.2
			};
		}
		if (this.hasNext()) {
			console.log(`[${CarNightFare.name}] não pode tratar. Chamando próximo...`);
			return this.nextHandler!.handle(request);
		}

		return {
			type: 'default',
			period: 'morning',
			total: request.data
		}
	}

}