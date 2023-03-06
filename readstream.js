const read = require('fs')

const stream = read.createReadStream('./content/big.txt', {highWaterMark: 9000, encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result)
})

// we always end with the error!

stream.on('error', (error)=> console.log(error))