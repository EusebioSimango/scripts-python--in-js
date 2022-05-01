const http = require('http')
const PORT = 3000
const { spawn } = require('child_process')

const run = (request, response) => {
	let detail;
	const pythonOne = spawn("python3", ['script.py'])
	response.write(JSON.stringify({ 'name' : 'Eusebio Simango' }))
	response.end()
}

const app = (request, response) => {
	response.writeHead(200, {'Content-Type': 'application/json'})

	return run(request, response)
}

http.createServer(app)
	.listen(PORT, () => console.log('Server running at:', PORT))