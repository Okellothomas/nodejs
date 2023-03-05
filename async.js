const { readFile } = require('fs')
const { result } = require('lodash')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, (error, data) => {
            if (error) {
                return
            } else {
                console.log(data)
            }
        })
    })
}

const start = async () => {
    const first = await getText('./content/first.txt')
    console.log(first)
}

start()

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error))

