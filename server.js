var http = require('http');
//var moduleOne = require('./math-random');
//var moduleTwo = require('./convert-money');
var moduleThree = require('./require');
http.createServer(function (req, res){
res.write(moduleThree.account());
res.write(moduleThree.dollars());

//var money = res.write(moduleOne(100,1000000));
//res.write(moduleTwo(moduleOne(100, 1000000)));
//res.write(account());
//res.write(dollars());
res.end();
}).listen(3000);
