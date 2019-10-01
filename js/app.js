(function (window) {
	'use strict';

var todos = [
	{ text: 'Eat', completed: true },
	{ text: 'Sleep', completed: false },
	{ text: 'Code', completed: true },
]

	new Vue({
		el:'#app',
		data:{
			title:'Todo List',
			todos: todos,
			text:''
		},
		methods:{
			addItem: function(){
				if (this.text.trim().length === 0){
					return
				}
				this.todos.push({
					text: this.text,
					completed: false
				})
				this.text=''
			},
			destroy: function(text){
				var _that = this
				var todoIndex
				this.todos.find(function (todo,index) {
					if (todo.text === text){
						todoIndex = index
					}
				})
				this.todos.splice(todoIndex,1)
			}
		}
	})

})(window);
