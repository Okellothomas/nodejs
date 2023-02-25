/**
 * Where we employ everything
 */

const myVariables = require("./modelrev1")
const myFunctions = require("./modelrev2")


myFunctions.sum(myVariables.num1, myVariables.num2, myVariables.num3)

myFunctions.myNames(myVariables.firstName, myVariables.lastName)