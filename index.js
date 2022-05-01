const { spawn } = require('child_process')


const pythonOne = spawn("python3", ['script.py', 'eusebio Simango'])

pythonOne.stdout.on('data', data => {
	console.log(`stdout: ${data}`)
})

pythonOne.stderr.on('data', data => {
	console.error(`stderr: ${data}`)
})

pythonOne.on('close', code => {
	console.log(`process ended: ${code}`)
})