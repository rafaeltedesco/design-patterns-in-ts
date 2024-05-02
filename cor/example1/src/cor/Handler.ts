import { periods, transportations } from '../services/TransportService';

export interface Handler<T> {
	nextHandler?: Handler<T>;
	canHandle(request: T): boolean;
	handle(request: T): { type: transportations, period: periods, total: number };
	hasNext(): boolean;
	setNext(handler: Handler<T>): void;
}