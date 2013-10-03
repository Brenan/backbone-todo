$(document).ready(function() {

var ToDo = Backbone.Model.extend({
	defaults:{
		title: '',
		completed: false,
		toggle: function(){
			if ($("label.checked")){
				return true;
			} else {
				return false;
			}
		}
	}
});

var ToDoView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#todo-template').html()),
	render: function(){
		var newEl =	this.$el.append(this.template(this.model.toJSON()));
		$(".todos-list").append(newEl);	
	}
});

$("#new-todo").keyup(function(e){
	if (e.which == 13){
		var addTask = new ToDoView({
			model: new ToDo({
				title: $(this).val(),
				completed: $(this).toggle()
			})
		})
		addTask.render();
		$(this).val("");
	}
});



});