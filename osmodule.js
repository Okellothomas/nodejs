/**
 * Writing the os module
 */

const os = require('os')

const version = os.version()

const userInfo = os.userInfo()

// console.log("**************************************************")
console.log(version)
// console("--------------------------------------------------------")
console.log(userInfo)

/**
 * The system uptime
 */

console.log(`The system uptime is ${os.uptime} in seconds`)

// current window os

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)