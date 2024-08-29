const accountId = 1111
let accountEmail = "mahesh@gmail.com"
var accountPass = "1234"
accountCity = "Ahmednagar"
let accountState;   //undefine value

// accountId = 2   not allowed
accountEmail = "jhdjd@gmail.com"
accountPass = "5678"
accountCity = "pune"
console.log(accountId);
console.table([accountId,accountEmail, accountPass, accountCity, accountState])

// preper not to use var beacause of issue in block scope and functional scope