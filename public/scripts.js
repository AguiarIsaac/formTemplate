let btn_submit = document.querySelector('input#btn_submit')
let btn_search = document.querySelector('input#btn_search')
let list_result = document.querySelector('select#listagem')
let list_option = document.querySelector('option.listagem')
let forms = {}
let list_form = []



btn_submit.addEventListener('click', save, result)
btn_search.addEventListener('click', listagem)

function save () {
	forms = {
		id: id(), 
		name: verificador(document.querySelector('input#name').value),
		email: verificador(document.querySelector('input#email').value),
		age: verificador(document.querySelector('input#age').value),
		funcao: verificador(document.querySelector('select#function').value),
		melhorias: checkbox(),
		commits: verificador(document.querySelector('textarea').value)
	}
	list_form.push(forms)
	console.log(list_form)
}


function verificador(campo) {
	if(campo == ''){
		window.alert('[ERROR] - Campo vazio, revise os dados')
	} else {
		return campo
	}
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
  				 list_result.innerHTML += `<option id="${list_form[form].id}" class="listagem" onclick="onclick="teste(this)"">${list_form[form].name}</option>`
  			}
    	
    }
  }
}