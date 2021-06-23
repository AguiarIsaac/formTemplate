let btn_submit = document.querySelector('input#btn_submit')
let btn_search = document.querySelector('input#btn_search')
let list_result = document.querySelector('select#listagem')
let list_option = document.querySelector('option.listagem')
let forms = {}
let list_form = []



btn_submit.addEventListener('click', save, result)
btn_search.addEventListener('click', listagem)
list_option.addEventListener('click', )

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

function listagem() {
	if(list_form == '') {
  		window.alert('[ERROR] - nenhum cadastro na lista')
  }  else {
  		for (form in list_form) {
  			if (list_form.indexOf(Number(list_form[form].id)) != -1 ) {
  		window.alert('[ERROR] - informações já listadas') 
  			} else {
  				list_result.innerHTML += `<option id="${list_form[form].id}" class="listagem">${list_form[form].name}</option>`
  			}
    	
    }
  }
}

function visualizacao() {
	window.alert(`${list_option.value}`)
}