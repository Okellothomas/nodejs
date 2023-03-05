const { readFile, writeFile } = require("fs")

readFile("./content/first.txt", "utf8", (error, result) => {
    if (error) {
        console.log(error)
        return;
    }
    const first = result
    writeFile("./content/third.text", `This is the third file ${first}`, (error, result) => {
        if (error) {
            console.log(error)
        }
        console.log(result)
    })
})


