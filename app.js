const nameInput = document.getElementById('nameInput')
const greetBtn = document.getElementById('greetBtn')
const personalGreeting = document.getElementById('personalGreeting')
const changeColorBtn = document.getElementById('changeColorBtn')

greetBtn.addEventListener('click', () => {
	const name = nameInput.value.trim()
	if (name) {
		personalGreeting.textContent = `Привет, ${name}!`
	} else {
		personalGreeting.textContent = 'Привет, гость!'
	}
})

const colors = [
	'lightblue',
	'lightgreen',
	'lightcoral',
	'lightgoldenrodyellow',
	'lightpink',
]

changeColorBtn.addEventListener('click', () => {
	const randomColor = colors[Math.floor(Math.random() * colors.length)]
	document.body.style.backgroundColor = randomColor
})
