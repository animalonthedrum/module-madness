var moduleOne = require('./math-random');
var moduleTwo = require('./convert-money');



exports.dollars = function() {
   var result = moduleTwo(moduleOne(100, 1000000));
   return result.toString();
};

exports.account = function() {
return  'Account Balance: \n';
};
