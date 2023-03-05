const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello world')
})

server.listen(6000, () => {
    console.log('Server is listening to port: 6000')
})