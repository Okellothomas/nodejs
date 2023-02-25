/**
 * We implement the path functionality. 
 */

const path = require('path')

// path separator
console.log(path.sep)

const filepath = path.join("/subfolder", "text.txt")

console.log(filepath)