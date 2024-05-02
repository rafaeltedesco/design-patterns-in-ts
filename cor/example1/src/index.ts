import { TransportService } from './services/TransportService'

(() => {
	const svc = new TransportService(10);
	const total = svc.calculateFreight('car', 'morning');
	console.log(total);
})()