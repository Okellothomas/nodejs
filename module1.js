/**
 * module
 */
// import the names
const names = require("./modulenames.js")
const Surname = require("./modulefunction.js")

console.log(names)
Surname("Susana")
// shared
Surname(names.john)
Surname(names.thomas)

