import { Transport } from './Transport';

export class Order {

	constructor(private readonly total: number) { }

	calculateFreight(transport: Transport) {
		return transport.calculateFreight(this.total);
	}


}