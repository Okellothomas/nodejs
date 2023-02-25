/**
 * module
 */
// import the names
const names = require("./modulenames.js")
const Surname = require("./modulefunction.js")
const person = require("./moduleobjects")

/**
 * This is the one two
 */

console.log(names)
console.log(person)
Surname("Susana")
// shared
Surname(names.john)
Surname(names.thomas)

