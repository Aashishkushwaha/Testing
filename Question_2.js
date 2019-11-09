/*
--- Question ---
In JavaScript, answer if the following expressions result in true or false. Please explain your
answer
a. “0” == 0 // true or false?
b. “” == 0 // true or false?
c. “” == “0” // true or false?

*/

// Answers => 

// --> a. "0" == 0
// The answer of the above expression will be evaluated as true because when we compare the string with the
// number then the string (operand_1) will be converted to number ("0" will be converted to 0) and then
// 0 will be compared to 0 which evaluates to TRUE

// NOTE -> This is the concept known as "coersion" in js, which is internal type conversion

// --> b. "" == 0
// The answer of the above expression will be evaluated as true because when we compare the string with the
// number then the string (operand_1) will be converted to number ("" will be converted to 0) and then
// 0 will be compared to 0 which evaluates to TRUE


// --> c. "" == "0"
// The answer of the above expression will be evaluated as FALSE because when we compare the string with the
// the string then they will be compared as string only. Since "" is not equals to "0". Hence this will be
// evaluated to FALSE.

// Note :=>
// === opearor doen't apply the coersion hence it is recommened that we should use === instead of == .

