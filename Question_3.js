/*
=== Question ====

function weird(x) {
var tmp = 3;
return function(y) {
return x + y + ++tmp;
}
}
var funny = weird(2);
var final_answer = funny(10);

What is the value of final_answer at the end of this snippet? Please explain your answer

*/


// Answer ==>

/*
  The output of the final_answer variable after execution of code will be 16.

  The above code snippet is showing the "Closures" in javaScript.

  what is Closure?
  ==> Closure is nothing but a function which returns an anonymous inner function(say 'child') which is defined inside another function(say 'Parent')
      In this the child function will have the access to the variables which are defined in the child function
      as well as it will have access to the variables which are defined in the parent function.

      The closure function will remember(store) the value of the parent variable whenever it is called.

*/

/* Tracing of output

  first we invoke the weird function with the arg value i.e 2, so the value of the x will be 2 in the inner function.
  in the weird a local varible is defined wit value 3. since inner function will have access to the 
  variables of it's own & it's parent as well, it will access the temp value which is 3.
  the weird function returns a fucntion which we are invoking by passing the value 10 which will
  be received by the parameter y.
  Since closure keeps the value of the parent variables when it's invoked it will have the value of 
  x as 2 and value of temp as 3.
  then it will return the value of the operation { x + y + ++tmp; }
  
  Hence it will perform operation and returns the result as 16.
*/