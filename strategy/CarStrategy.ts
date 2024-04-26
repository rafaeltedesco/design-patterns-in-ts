import { Transport } from './Transport';

export class CarStrategy implements Transport {
	calculateFreight(total: number) {
		return total * 1.1;
	}
}