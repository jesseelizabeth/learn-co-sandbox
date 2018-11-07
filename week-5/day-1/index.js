console.log(document.querySelector('#third-div'))

console.log(document.querySelectorAll('div p'))



// 1. create element 
let pTag = document.createElement('p')
// 2. put text in paragraph tag
pTag.innerText = "Some text"
// 3. put it on the page 
let thirdDiv = document.querySelector('#third-div')
thirdDiv.appendChild(pTag)

// method chaining
document.querySelector('div p').remove()
// longer version
let pTag = document.querySelector('div p')
pTag.remove()

// variable, named something with a value of 'another thing'
let something = "another thing"
console.log(something)
// second time it prints it will print something else
something = "something else"

// constant variable, cannot change later on
const constantVariable = 'unchangeable'
console.log(constantVariable)

// do not use var (use let or const)
var variable = 'variable'

document.querySelector('body') // looks for html tag in html
// another way to write (have to define the variable first)
const body = 'body'
document.querySelector(body)

// Data Types
Number: 1, 2, 3, 4, 3.4, 24/3
Boolean: true false (3 > 4) -> false
String: 'p' 'tag'

'true' true // not the same
'1' 1 // not the same

Objects: (window/document)
Arrays: (lists)

undefined
null

// Operations 
let body = 'body'
let body2 = 'body2'
body + ' ' body2 = body body2

const myName = 'Jesse'
alter('Hi ' + myName)









