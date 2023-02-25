// the functions 

const sum = (first, second, third) => {
    
    if (first < second && first < third) {
        console.log(`first is the largest ${first}`)
    } else if (second < first && second < third) {
        console.log(`second is the largest ${second}`)
    } else if (third < first && third < second) {
        console.log(`third is the largest ${third}`)
    } else {
        console.log(`${first} = ${second} = ${third}`)
    }
}


function myNames(one, second) {
    if (one < second) {
        console.log(`it is the fist name ${one} `)
    } else {
        console.log(`it is the second name ${second}`)
    }
}

module.exports = {sum, myNames}