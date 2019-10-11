var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
    'Fazer café',
    'Estudar JS',
    'Estudar PHP'
]

function renderTodos() {

	listElement.innerHTML = ''

	for (todo of todos) {
		var todoElement = document.createElement('li')
		var todoText = document.createTextNode(todo)
		var linkElement = document.createElement('a')

		linkElement.setAttribute('href', '#')

		var pos = todos.indexOf(todo)
		linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

		var linkText = document.createTextNode('Excluir')


        linkElement.appendChild(linkText)    // Linka texto excluir na tag 'a'

		todoElement.appendChild(todoText)      // Linka texto do vetor no 'li'
		todoElement.appendChild(linkElement)   // Linka 'a' no 'li'

		listElement.appendChild(todoElement)   // linka 'li' na 'ul'
	}
}

renderTodos()

function addTodo() {
	var inputText = inputElement.value

	todos.push(inputText)
	inputElement.value = ''
	renderTodos()
	saveToStorage()
}

function deleteTodo(pos) {
    todos.splice(pos, 1)
    renderTodos()
    saveToStorage()
} 

function saveToStorage() {
	localStorage.setItem('list_todos', JSON.stringify(todos))
}