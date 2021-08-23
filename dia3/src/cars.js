const form = document.querySelector('[data-el="form-cars"]')
const table = document.querySelector('[data-el="table-cars"]')


form.addEventListener('submit', (event) => {
  event.preventDefault()
  
  const imageUrl = event.target.elements.image
  const brandModel = event.target.elements.brandModel
  const year = event.target.elements.year
  const plate = event.target.elements.plate
  const color = event.target.elements.color

  const fields = [imageUrl, brandModel, year, plate, color]

  const tr = document.createElement('tr')
  fields.forEach(field => {
    const td = document.createElement('td')
    td.textContent = field.value
    tr.appendChild(td)
  })

  table.appendChild(tr)

  event.target.reset()
  imageUrl.focus()
})
