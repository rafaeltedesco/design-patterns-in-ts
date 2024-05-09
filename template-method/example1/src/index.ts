import { CarNightFare } from './cor/CarNightFare';
import { LogHandler } from './cor/LogHandler';
import { TransportService } from './services/TransportService'
import { ShipMorningFare } from './cor/ShipMoringFare';

(() => {
	const handler1 = new CarNightFare();
	const logHandler = new LogHandler();
	const handler3 = new ShipMorningFare();
	handler1.setNext(logHandler);
	logHandler.setNext(handler3);


	const svc = new TransportService(handler1);
	const total = svc.calculateFreight({ type: 'car', period: 'night', data: 10 });
	console.log(total);
})()