const http = require('http');;

const server = http.createServer(function (req,res) {

    if(req.url === "/data"){
        res.end("there is the data fil");
    }
    
    res.end("Hellow World");
    

});

server.listen(3000);

