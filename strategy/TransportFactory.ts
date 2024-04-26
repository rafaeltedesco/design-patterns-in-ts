import { CarStrategy } from './CarStrategy';
import { ShipStrategy } from './ShipStrategy';

type typesOfTransportation = 'car' | 'ship' | 'train' | 'motorcycle';
export class TransportFactory {

	public static createTransport(transportationType: typesOfTransportation) {
		switch (transportationType) {
			case 'car':
				return new CarStrategy();
			case 'ship':
				return new ShipStrategy();
		}
	}

}