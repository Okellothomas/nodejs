/**
 * This is the first projects
 */

// const costs = 30
// const EventEmitter = require('events')

// const customEmitter = new EventEmitter()


// customEmitter.on('response', () => {
//     console.log('data received')
// })

// customEmitter.on('response', () => {
//     console.log('some other logic here!..')
// })

// customEmitter.on('response', () => {
//     console.log('With these things we should!..')
// })

// customEmitter.emit('response')

const http = require('http')


const server = http.createServer((req, res) => {
    res.end('Home Page Nigaa')
})

server.listen(4000)