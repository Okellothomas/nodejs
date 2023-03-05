/**
 * We implement the path functionality. 
 */

const path = require('path')

// path separator
console.log(path.sep)

const filepath = path.join("/subfolder", "text.txt")

console.log(filepath)

// the absolute path

const absolute = path.resolve(__dirname, "subfolder", "text.txt")
console.log(absolute)