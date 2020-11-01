// example api get request based on https://nodejs.dev/learn/making-http-requests-with-nodejs
const https = require('https')

// api target parameters
const options = {
  hostname: 'exampledes.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}

// api request execution
const req = https.request(options, res => {
  // Display the status code
  console.log(`statusCode: ${res.statusCode}`)

  // Display the returned data
  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.log()
  console.log("ERROR")
  console.log()
  console.error(error)
})

req.end()
