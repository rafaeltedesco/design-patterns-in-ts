import { Transport } from './Transport';

export class ShipStrategy implements Transport {
	calculateFreight(total: number): number {
		return total * 1.2;
	}

}