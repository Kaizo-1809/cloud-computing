const http = require('http')
const port = 3000;
const fs = require('fs')
const server = http.createServer((req, res)=>{
    fs.readFile("index.html", (err, data)=>{
        if(err){
            console.error(err)
        }
        else{
            res.write(data)
            res.end()
        }
    })
})
server.listen(port, ()=>{
    console.log("Server is listening at http://localhost:"+port)
})