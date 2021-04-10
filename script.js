const http = require('http')
const url = require('url')
const calcular = require('./operacao.js');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'})

    const {n1,n2,op} = url.parse(req.url,true).query;

    let operacao = calcular(Number(n1),Number(n2),op)

    let resultado = 'o resultado da operacao e: ' + operacao
    
    res.end(resultado);
   
}).listen(3000)