export type transportations = 'car' | 'ship' | 'airplane' | 'default';
export type periods = 'night' | 'morning' | 'afternoon';

export class TransportService {
	constructor(private readonly total: number) { }
	calculateFreight(type: transportations, period: periods) {
		switch (type) {
			case 'car':
				if (period === 'night') {
					return {
						type,
						period,
						total: this.total * 1.2
					};
				}
				if (period === 'afternoon') {
					return {
						type,
						period,
						total: this.total * 1.1
					};
				}
				if (period === 'morning') {
					return {
						type,
						period,
						total: this.total * 1.05
					};
				}
			case 'ship':
				if (period === 'night') {
					return {
						type,
						period,
						total: this.total * 1.4
					};
				}
				if (period === 'afternoon') {
					return {
						type,
						period,
						total: this.total * 1.3
					};
				}
				if (period === 'morning') {
					return {
						type,
						period,
						total: this.total * 1.25
					};
				}
			case 'airplane':
				if (period === 'night') {
					return {
						type,
						period,
						total: this.total * 1.7
					};
				}
				if (period === 'afternoon') {
					return {
						type,
						period,
						total: this.total * 1.65
					};
				}
				if (period === 'morning') {
					return {
						type,
						period,
						total: this.total * 1.5
					};
				}
		}
	}
}