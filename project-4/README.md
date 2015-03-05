## Website Performance Optimization portfolio project

To view the project live, head over to http://tarheelsrule44.github.io/project-4/index.html

For optimization of views/js/main.js:

Removed many variables from "for loops" that didn't need to be included.  

Moved variables dx and newwidth out of the for loop in changePizzaSizes().

In the function updatePositions(), I moved the items and phase variables outside of the for loop to increase speed. 

I also replaced many document.queryselector syntax with document.getElementByClass as queryselector can be quite slow. 


