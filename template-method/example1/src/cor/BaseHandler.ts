import { transportations, periods } from '../services/TransportService';
import { Handler } from './Handler';
import { Request } from './types/Request';

export abstract class BaseHandler implements Handler<Request> {
	nextHandler?: Handler<Request> | undefined;

	abstract canHandle(request: Request): boolean;

	handle(request: Request): { type: transportations; period: periods; total: number; } {
		if (this.canHandle(request)) {
			return this.execute(request);
		}
		if (this.hasNext()) {
			return this.nextHandler!.handle(request);
		}

		return this.getDefault(request);
	}
	getDefault(request: Request): { type: transportations; period: periods; total: number; } {
		return {
			type: 'default',
			period: 'morning',
			total: request.data
		}
	}

	abstract execute(request: Request): { type: transportations; period: periods; total: number; };

	hasNext(): boolean {
		return !!this.nextHandler;
	}
	setNext(handler: Handler<Request>): void {
		this.nextHandler = handler;
	}

}