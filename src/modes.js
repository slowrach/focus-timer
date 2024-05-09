let darkMode = true
const buttonMode = document.getElementById('mode')

buttonMode.addEventListener('click', changeMode)

function changeMode(event) {
   document.documentElement.classList.toggle('light')

   const mode = darkMode ? 'light' : 'dark'

   event.currentTarget.querySelector('span').textContent = `${mode} mode ativado!`

   darkMode = !darkMode
}