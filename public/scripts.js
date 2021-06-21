let btn_submit = document.querySelector('input#btn_submit')
let forms = {}
let list_form = []
btn_submit.addEventListener('click', save, result)

function save () {
	forms = {
		id: id(), 
		name: document.querySelector('input#name').value,
		email: document.querySelector('input#email').value,
		age: document.querySelector('input#age').value,
		funcao: document.querySelector('select#function').value,
		melhorias: checkbox(),
		commits: document.querySelector('textarea').value
	}
	list_form.push(forms)
	console.log(list_form)
}

function checkbox() {
	let checks = document.getElementsByName('prefer')
	let melhorias = []
	for(let c = 0; c < checks.length; c++) {
		if(checks[c].checked == true) {
			melhorias.push(checks[c].value)
		}
	}
	return melhorias
}

function id() {
	if(list_form.length == 0) {
		return 0
	} else {
		return list_form.length
	}
}

function result() {
	let result = document.querySelector('section#result')

	result.innerHTML = `Informações fornecidas<br>Nome:${forms.name}`
}