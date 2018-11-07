const paragraphOne = document.createElement('p')
// <p></p> => paragraphOne
paragraphOne.innerText = 'Hi im a paragraph'
// <p>Hi im a paragraph</p> => paragraphOne

/* To put something in our HTML:
1. Find the place to put it 
2. Append child to that place 
*/

const ourDiv = document.querySelector('#container')
// <div id="container"></div>

ourDiv.appendChild(paragraphOne)
// <div id="container"> <p>Hi im a paragraph</p> </div>


function addParagraphToHTML(message) {
  if (message !== undefined) {
    const paragraphOne = document.createElement('p')
    paragraphOne.innerText = message
    const ourDiv = document.querySelector('#container')
    ourDiv.appendChild(paragraphOne)
  } else {
    console.log('you must give a message')
  }
  
}

addParagraphToHTML('Hi im a paragraph')
addParagraphToHTML('Second paragraph')
addParagraphToHTML('Third')
addParagraphToHTML()




