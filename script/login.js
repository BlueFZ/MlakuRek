let icon= document.querySelector('.show_pass')
icon.addEventListener('click', showPass)

let cond= false

function showPass() {

	let input= document.querySelector('.pass')
	if (!cond) {
		input.setAttribute('type', 'text')
		icon.style.color= '#9dc4b9'
		cond= true
	} else {
		input.setAttribute('type', 'password')
		icon.style.color= 'white'
		cond= false
	}
}