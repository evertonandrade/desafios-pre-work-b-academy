import './style.css'

document.querySelector('[data-el="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const link = document.querySelector('[data-el="link"')
const app = document.querySelector('[data-el="app"]')

link.addEventListener('click', (event) => {
  event.preventDefault()
  app.classList.toggle('hide')
})
