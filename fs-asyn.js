// use the hppts

const http = require('http')

const Server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end('Home page ')
    }
    else if (req.url === "/about") {
        for (let i = 0; i < 1000; i++){
            for (let j = 0; j < 1000; j++){
                console.log(`${i}, {j}`)
            }  
        }
        res.end('About page')
    } else {
        res.end('Error Page!')
    }
    
})

Server.listen(3000, () => {
    console.log('Server listerning at port 3000...')
})