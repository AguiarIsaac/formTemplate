let btn_submit = document.querySelector('input#btn_submit')
let forms = {}
let list_form = []

btn_submit.addEventListener('click', save)

function save () {
	forms = {
		name: document.querySelector('input#name').value,
		email: document.querySelector('input#email').value,
		age: document.querySelector('input#age').value,
		funcao: document.querySelector('select#function').value,
		melhorias: checkbox(),
		commits: document.querySelector('textarea#comentario').value
	}

	list_form.push(forms)
	console.log(forms)
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
