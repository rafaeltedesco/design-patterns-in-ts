type typesOfTransportation = 'car' | 'ship' | 'train' | 'motorcycle';;
type periods = 'night' | 'morning' | 'afternoon';

export class OrderComplex {

	constructor(private readonly total: number) { }

	calculateFreight(transportType: typesOfTransportation, period: periods) {
		switch (transportType) {
			case 'car':
				if (period === 'morning') {
					return this.total * 1.1;
				}
				if (period === 'afternoon') {
					return this.total * 1.09;
				}
				if (period === 'night') {
					return this.total * 1.2;
				}
			case 'ship':
				if (period === 'morning') {
					return this.total * 1.3;
				}
				if (period === 'afternoon') {
					return this.total * 1.25;
				}
				if (period === 'night') {
					return this.total * 1.4;
				}
			default:
				throw new Error('Invalid Option');
		}
	}
}