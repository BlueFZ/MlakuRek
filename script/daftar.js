let icon_pass= document.querySelector('.show_pass')
let icon_conf= document.querySelector('.show_conf')
icon_pass.addEventListener('click', showPass)
icon_conf.addEventListener('click', showConf)

let cond= false
let cond2= false

function showPass() {

	let input= document.querySelector('.pass')
	if (!cond) {
		input.setAttribute('type', 'text')
		icon_pass.style.color= '#9dc4b9'
		cond= true
	} else {
		input.setAttribute('type', 'password')
		icon_pass.style.color= 'white'
		cond= false
	}
}

function showConf() {

	let input= document.querySelector('.conf')
	if (!cond2) {
		input.setAttribute('type', 'text')
		icon_conf.style.color= '#9dc4b9'
		cond2= true
	} else {
		input.setAttribute('type', 'password')
		icon_conf.style.color= 'white'
		cond2= false
	}
}