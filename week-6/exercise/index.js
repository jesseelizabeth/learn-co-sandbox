const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']

// color is a parameter
function createColorfulDiv(color) {
  // make your div and put it on the 
  const newDiv = document.createElement('div')
  newDiv.innerText = color 
  const containerDiv = document.querySelector('#container')
  containerDiv.appendChild(newDiv)
  
  newDiv.style.backgroundColor = color
}

// How do we do something for every item in an array 
// Iteration!!!
for (let color of colors) {
  // do something for every color inside of colors
  createColorfulDiv(color)
}