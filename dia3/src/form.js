const fieldName = document.querySelector('[data-el="name"')

fieldName.addEventListener('input', (event) => {
  const str = event.target.value;
  const strCap = capitalizeText(str)
  event.target.value = strCap
})

function capitalizeText(str) {
  const arr = str.split(' ')
  const wordsToIgnore = ["de", "da", "do", "dos"]
  for (let i = 0; i < arr.length; i++) {
    if(wordsToIgnore.includes(arr[i].toLowerCase()))
      arr[i] = arr[i].toLowerCase()
    else
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const strFormated = arr.join(' ')
  return strFormated
}


const form = document.querySelector('[data-el="form"]')
const container = document.createElement('div')
document.body.appendChild(container)
const select = document.createElement('select')
select.setAttribute('multiple', '')

const colors = {
  red: '#ff0000',
  green: '#008000',
  blue: '#000080',
  gray: '#808080',
  black: '#000000'
}

Object.keys(colors).forEach(color => {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color.toUpperCase()
  select.appendChild(option)
})

form.appendChild(select)

select.addEventListener('change', (event) => {
  container.innerHTML = ''
  const selectedOptions = Array.from(event.target.selectedOptions)
  selectedOptions.forEach(option => {
    const div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.background = colors[option.value]
    container.appendChild(div)
  })
})







