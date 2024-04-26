import { Transport } from './Transport';

export class CarNightStrategy implements Transport {
	calculateFreight(total: number): number {
		return total * 1.15
	}

}