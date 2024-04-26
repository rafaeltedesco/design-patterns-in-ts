import { Transport } from './Transport';

export class CarMorningStrategy implements Transport {
	calculateFreight(total: number): number {
		return total * 1.1
	}

}