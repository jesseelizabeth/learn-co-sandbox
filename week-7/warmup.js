// 1. get the button for the click event 
// 2. attach the click event to the button

const button = document.querySelector('#add')
// <button>+</button>

button.addEventListener('click', (event) => {
  const div = document.querySelector('#total')
  const oldValue = parseInt(div.innerText, 10)
  div.innerText = oldValue + 1
})

const subtractButton = document.querySelector('#subtract')

subtractButton.addEventListener('click', (event) => {
  const div = document.querySelector('#total')
  if (div.innerText === '0') {
    return
  }
  const oldValue = parseInt(div.innerText, 10)
  div.innerText = oldValue - 1
})


