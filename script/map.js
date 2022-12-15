let kaki= document.getElementById('kaki')
kaki.addEventListener('click', function() {
	iconAction('kaki')
}) 

let sepeda= document.getElementById('sepeda')
sepeda.addEventListener('click', function() {
	iconAction('sepeda')
})

let tombol= document.getElementById('tombol')
tombol.addEventListener('click', function() {
	iconAction('tombol')
})

let go= document.querySelector('.goTxt')
go.addEventListener('click', function() {
	iconAction('.goTxt')
})

let cond= false
let cond2= false
let cond3= false

function iconAction(icon) {
	if(icon === 'kaki') {
		if(!cond) {
			kaki.style.background= '#ECB9F4'
			cond= true
		} else {
			kaki.style.background= '#69616a2f'
			cond= false
		}
	} else if(icon ==='sepeda') {
		if(!cond) {
			sepeda.style.background= '#ECB9F4'
			cond= true
		} else {
			sepeda.style.background= '#69616a2f'
			cond= false
		}
	} else if(icon ==='tombol') {
		if(!cond2) {
			tombol.style.background= '#ECB9F4'
			cond2= true
		} else {
			tombol.style.background= '#69616a2f'
			cond2= false
		}
	}	else if(icon ==='.goTxt') {
		if(!cond3) {
			alert('Tracking is on')
			go.style.background= '#ECB9F4'
			cond3= true
		} else {
			alert('Tracking is off')
			go.style.background= '#69616a2f'
			cond3= false
		}
	}	
}
