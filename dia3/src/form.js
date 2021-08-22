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
