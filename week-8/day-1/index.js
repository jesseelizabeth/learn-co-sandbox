const submitButtonName = document.querySelector('#submit-name')
submitButtonName.addEventListener('click', (event) => {
  const input = document.querySelector('input')
  const movieName = input.value
  fetch('http://www.omdbapi.com/?apikey=4668faa6&t=' + movieName)
    .then((response) => response.json())
    .then((movieJson) => {
      const title = document.querySelector('#title')
      const year = document.querySelector('#year')
      const rating = document.querySelector('#rated')
      const poster = document.querySelector('#poster')
      title.innerText = ''
      rated.innerText = ''
      year.innerText = ''
      poster.src = ''
      
      if (movieJson['Response'] === 'False') {
        const rated = document.querySelector('#rated')
        rated.innerText = 'Title not found, please search again'
        return
      }
    
      title.innerText = movieJson['Title']
      year.innerText = movieJson['Year']
      rated.innerText = movieJson['Rated']
      poster.src = movieJson['Poster']
    })
})

const submitButtonId = document.querySelector('#submit-id')
submitButtonId.addEventListener('click', (event) => {
  const input = document.querySelector('#movie-search-id')
  const movieId = input.value
  fetch('http://www.omdbapi.com/?apikey=4668faa6&i=' + movieId)
    .then((response) => response.json())
    .then((movieJson) => {
      const title = document.querySelector('#title')
      const year = document.querySelector('#year')
      const rating = document.querySelector('#rated')
      const poster = document.querySelector('#poster')
      title.innerText = ''
      rated.innerText = ''
      year.innerText = ''
      poster.src = ''
      
      if (movieJson['Response'] === 'False') {
        const rated = document.querySelector('#rated')
        rated.innerText = 'Title not found, please search again'
        return
      }
    
      title.innerText = movieJson['Title']
      year.innerText = movieJson['Year']
      rated.innerText = movieJson['Rated']
      poster.src = movieJson['Poster']
    })
})





