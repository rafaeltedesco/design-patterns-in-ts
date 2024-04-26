import { Order } from './OrderAfterApplyingStrategy';
import { TransportFactory } from './TransportFactory';

const order = new Order(10);


const transport = TransportFactory.createTransport('ship');

if (transport) {

	const freight = order.calculateFreight(transport);
	console.log(freight);
}
