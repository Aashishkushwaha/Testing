/*
=== Question ===

In CSS, what does * { box-sizing: border-box; } do? What are its advantages?

*/

// Answer

/*

Here * is a wildcard selector (i.e every element)
Here we're specifing the box-sizing property of each element must follow border-box.
It means this will include the border of the element while calculating the height & width of the element &
place the item accordingly in the document.

Other values of the box-sizing:
1. Content-box:
  this will not include the border of the element wwhile calculating the height & width of the element &
place the item accordingly in the document.

2. inherit:
  this will be inherited from the immediate parent of the element (it can be 'Content-box' or 'Border-box') 

*/