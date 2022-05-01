const { spawn } = require('child_process')


const pythonOne = spawn("python3", ['add.py', 90 , 6])


pythonOne.stdout.on('data', data => {
	console.log(`stdout: ${data}`)
})

pythonOne.stderr.on('data', data => {
	console.error(`stderr: ${data}`)
})

pythonOne.on('close', code => {
	console.log(`process ended: ${code}`)
})
