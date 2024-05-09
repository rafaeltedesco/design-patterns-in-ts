import { Request } from './types/Request';
import { Handler } from './Handler';
import { Response } from './types/Response';

export class LogHandler implements Handler<Request> {
	nextHandler?: Handler<Request>;
	canHandle(request: Request): boolean {
		return true;
	}
	handle(request: Request): Response {
		console.log(`Log da Request: ${JSON.stringify(request)}`);
		if (this.hasNext()) {
			return this.nextHandler!.handle(request);
		}
		return {
			type: request.type,
			period: request.period,
			total: request.data
		}
	}
	hasNext(): boolean {
		return !!this.nextHandler;
	}
	setNext(handler: Handler<Request>): void {
		this.nextHandler = handler;
	}

}