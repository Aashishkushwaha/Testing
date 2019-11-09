/*
=== Question
Why is it generally a good idea to position CSS ‘<link>’s between ‘<head></head>’ and JS
‘<script>’s just before ‘</body>’? Do you know any exceptions? Please explain ‘async’, ‘defer’
attributes of script tags.
*/

// Answer =>

/*
1. <link> in between the <head></head>
  Usually it's the good practice to place the <link> in between the <head> tag, because of this as soon 
  as the document renders to the screen it applies the style at the same time.
  
  Note: If we place the <link> at the bottom of the page then the browser will apply the browser default 
  styles and as soon as browser encounters the <link> tag at the bottom it again have to restyle the 
  document from the top again.


2. <script> just before </body>
  It's the best practice to place the <script>'s just before the </body>. Because html pages are loaded from top to bottom.
  
  Note: If we put our JavaScript links in the head section, the entire JavaScript file will load before loading 
  any of the HTML, which could cause a few problems.
1. If you have code in your JavaScript that alters HTML as soon as the JavaScript file loads, there won't 
   actually be any HTML elements available for it to affect yet, so it will seem as though the JavaScript 
   code isn't working, and you may get errors.
2. If you have a lot of JavaScript, it can visibly slow the loading of your page because it loads all of 
   the JavaScript before it loads any of the HTML.


  *** async attribute in  <script>
    Async scripts are executed as soon as the script is loaded, so it doesn't guarantee the order of execution 
    (a script you included at the end may execute before the first script file )

  *** defer attribute in  <script>
     Defer scripts guarantees the order of execution in which they appear in the page.
*/