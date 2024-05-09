import http from 'http';

declare module 'http' {

	export interface IncomingMessage {
		body: any;
	}
}


class Response extends http.ServerResponse {
	res: http.ServerResponse;
	constructor(req: http.IncomingMessage, res: http.ServerResponse) {
		super(req);
		this.res = res;
	}
	json(data: Object) {
		console.log('calling json');
		this.res.setHeader('Content-Type', 'application/json');
		console.log('header was set')
		this.res.write(JSON.stringify(data));
		console.log('write');
		this.res.end();
	}
}

const handler = (req: http.IncomingMessage, res: http.ServerResponse) => {
	const customRes = new Response(req, res);
	if (req.method === 'GET' && req.url === '/users') {
		return customRes.json({ message: 'Hello from users' });

	}
	else if (req.method === 'POST' && req.url === '/users') {
		let data = '';
		req.on('data', chunck => {
			data += chunck;
		})

		req.on('end', () => {
			try {
				req.body = JSON.parse(data);
			}
			catch (err) {
				req.body = {};
			}
			finally {
				const { name } = req.body;
				if (!name) {
					res.writeHead(400, { 'Content-Type': 'application/json' });
					res.write(JSON.stringify({ message: 'Invalid Name' }));
					res.end();
					return;
				}
				res.writeHead(201, { 'Content-Type': 'application/json' });
				res.write(JSON.stringify({ message: 'User created' }));
				res.end();
			}
		})
	}
	else if (req.method === 'POST' && req.url === '/products') {
		let data = '';
		req.on('data', chunck => {
			data += chunck;
		})

		req.on('end', () => {
			try {
				req.body = JSON.parse(data);
			}
			catch (err) {
				req.body = {};
			}
			finally {
				const { name, price } = req.body;
				if (!name || !price) {
					res.writeHead(400, { 'Content-Type': 'application/json' });
					res.write(JSON.stringify({ message: 'Name and price are required!' }))
					res.end();
					return;
				}
				res.writeHead(201, { 'Content-Type': 'application/json' });
				res.write(JSON.stringify({ message: 'Product created' }))
				res.end();
			}
		})
	}
	else {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify({ message: 'OK' }));
		res.end();
	}
}


http.createServer(handler)
	.listen(3000, () => console.log('Listening on PORT 3000'));

