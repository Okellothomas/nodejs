/**
 * read and write file
 */

const readFile = require('fs')

// const first = readFile.readFileSync("/content/first.txt", "utf-8")
const second = readFile.readFileSync("/content/second.txt", "utf-8")

console.log(second)

// creating a file

readFile.writeFileSync(
    `./content/result-sync.txt`,
    `Here is the result: ${second}`
)