(function (window) {
	'use strict';

var todos = [
	{ text: 'Eat', completed: true },
	{ text: 'Sleep', completed: false },
	{ text: 'Code', completed: true }
]

	var app = new Vue({
		el:'#app',
		data:{
			title:'Todo List',
			todos: todos,
			text:''
		},
		computed:{
			itemNumber: function(){
				return this.todos.length;
			}
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
				var todoIndex
				this.todos.find(function (todo,index) {
					if (todo.text === text){
						todoIndex = index
					}
				})
				this.todos.splice(todoIndex,1)
			},
			handleClear: function(){
				for (var i = todos.length-1 ; i>=0; i--){
					if(todos[i].completed === true){
						this.todos.splice(i,1)
					}
				}
				
			}
		}
	})

})(window);
