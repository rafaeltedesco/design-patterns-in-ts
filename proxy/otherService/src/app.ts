import http from 'http';

const users = [{ id: 1, name: 'Rafael', isActive: true }]

const notFound = (res: http.ServerResponse) => (message: string) => {
	res.writeHead(404, { 'Content-Type': 'application/json' });
	res.write(JSON.stringify({ message }));
	res.end();
}
type RequestT = {
	url?: string,
	method?: string,
	ip?: string
}

type WindowT = {
	windowStart: number,
	requests: RequestT[],
	maxRequests: number,
	windowSize: number
}

var window: WindowT = {
	windowStart: new Date().getTime(),
	requests: [],
	maxRequests: 3,
	windowSize: 5000
};

const handleTooManyRequests = (res: http.ServerResponse) => {
	res.writeHead(429, { 'Content-Type': 'application/json' });
	res.write(JSON.stringify({ message: 'Too Many Requests' }));
	res.end();
}

const handleUsers = (req: http.IncomingMessage, res: http.ServerResponse) => {
	const notFoundResponse = notFound(res);
	const pattern = /(\/users\/\d+)/;
	if (pattern.test(req.url!) && req.method === 'GET') {
		const id = Number(req.url!.split('/')[2])
		const user = users.find((user) => user.id === id);
		if (!user) {
			return notFoundResponse('User not Found');
		}
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify({
			message: "OK",
			data: {
				user
			}
		}));
		res.end();
	} else {
		return notFoundResponse('Page Not Found');
	}
}

const handler = (req: http.IncomingMessage, res: http.ServerResponse) => {

	const now = new Date().getTime();
	if (now <= (window.windowStart + window.windowSize)) {
		if (window.requests.length >= window.maxRequests) {
			return handleTooManyRequests(res);
		}
		window.requests.push({ url: req.url, method: req.method, ip: req.socket.remoteAddress })
		return handleUsers(req, res);
	} else {
		console.log('Cleaning window...');
		window = {
			...window,
			windowStart: new Date().getTime(),
			requests: []
		}
		return handler(req, res);
	}
}

http.createServer(handler)
	.listen(8080, () => console.log('Server up and running on PORT 8080'));