$(document).ready(function() {

var ToDo = Backbone.Model.extend({
	defaults:{
		title: '',
		completed: false
	}
});

var ToDoView = Backbone.View.extend({
	el: '.todos-list',
	tagName: 'li',
	className: '.todos-list li',
	template: _.template($('#todo-template').html()),
	render: function(){
		this.$el.append(this.template(this.model.toJSON()));
	}
});

$("#new-todo").keyup(function(e){
	if (e.which == 13){
		var addTask = new ToDoView({
			model: new ToDo({
				title: $(this).val(),
				completed: false
			})
		})
		addTask.render();
		$(this).val("");
	}
});



});