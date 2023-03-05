const http = require('http')

const Server = http.createServer((req, res) => {
    // employing the req
    if (req.url === "/") {
        res.end("This is the home page nigaa")
    }
    if (req.url === "/about") {
        res.end("This is my about page thomas")
    }

    // res.write("sure it is me")
    res.end(
        `
        <h1>Opps!</h1>
        <p> <a href="/"> go to home page</a></p>
        `
    )
})

Server.listen(4000)