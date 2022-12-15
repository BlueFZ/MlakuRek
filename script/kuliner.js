let tombol= document.querySelector('.button')
tombol.addEventListener('click', action)

function action() {
	let saldo = document.querySelector('.poin')
	saldo.innerHTML= '&#x2764; ' + (21634 - 1500)
}