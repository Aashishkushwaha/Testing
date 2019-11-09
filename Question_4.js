/*
=== Question ===

Consider the following program
function Person(name) {
this.name = name;
}
Person.prototype.intro = function () {
console.log("Hello I am " + this.name);
}
var person = new Person("John");

Please explain the output of following snippets
1. person.intro();
2. person.intro.apply();
3. person.intro.apply({'name' : 'Jack'});
4. var name = "Jim"; person.intro.apply(null);
5. var intro = person.intro; intro();
*/

// Answers => 

/*
1. person.intro()
   Output of this expression will be => "Hello I am John".
   Since we're calling the intro using the person object hence the 'this' keyword will refer to the person inside
   the intro function

2. person.intro.apply();
   Output of this expression will be => It depends on the value which is currenty assigne to the name variale which is associated
   with the window object. => "Hello I am [value hold by the name variale in global scope]" 
   Since we're calling the apply function without passing any argument the 'this' keyword will refer to the global
   object [window] in the browser.

3. person.intro.apply({'name' : 'Jack'});
   Output of this expression will be => "Hello I am Jack".
   Since we're passing a new object with the name property. In this case the this argument will refer to the object
   which we're passing to the apply funciton. Hence this.name will refer to the name property of the object which
   we passed to the apply function. 

4. var name = "Jim"; person.intro.apply(null);
   Output of this expression will be => "Hello I am Jim".
   1. Here we are defining the new variable name, since we define this variable in the global scope then this name
      variable will be attaced to the global [window] object.
   2. Since we're calling the apply function by passing null as an argument the 'this' keyword  will refer to the global
      object [window] in the browser. hence the this.name will refer to the window.name which is we defined earlier & 
      the value will be "Jim".

5. var intro = person.intro; intro();
   Output of this expression will be => It depends on the value which is currenty assigne to the name variale which is associated
   with the window object. => "Hello I am [value hold by the name variale in global scope]" 
   Here we are assigning the reference of the person.intro function to the intro variable.
   & then we're executin the intro() function, since we're calling the function from the global scope the 'this' keyword
   will refer to the global [window] object in the browser.
*/