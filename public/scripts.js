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
		//melhorias: document.querySelector(''),
		commits: document.querySelector('textarea#comentario').value
	}

	console.log(forms)
}