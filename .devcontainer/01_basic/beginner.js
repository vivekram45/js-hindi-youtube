const accountID="112233"   /*("A constant is a value that remains the same throughout the program" ) */
let accountname="Vivek Ram" /*(let is also used to declare variable but it is block scoped We can update its value but we cannot redeclare it in the same scope)*/
var accountemailID="vivekram4005@gmail.com" /*("var is used to declare variable but it is function scoped. We can update its value as well as redeclare it") */
accoutcity="kalyan"
let accountstate;

console.table([accountID,accountname,accountemailID,accoutcity,accountstate])

// accountID="2231515"

/*
   perfer not to use var
   because the issues block scope and functional scope
   var I can not use constantly beacause
   of block scope and funtional scope
*/