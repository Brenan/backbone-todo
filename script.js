$(document).ready(function() {

var ToDo = Backbone.Model.extend({
	defaults:{
		title: '',
		completed: false,
		},
		toggle: function(){
			this.set({completed: !this.get('completed')});
			}
});

var ToDoView = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.model, 'change', this.render);
		$('.todos-list').append(this.el);
		this.render();

	},
	tagName: 'li',
	template: _.template($('#todo-template').html()),
	render: function(){
		var newEl =	this.$el.html(this.template(this.model.toJSON()));
		// $(".todos-list").append(newEl);	
		
	},
	
	events:{
		'click .toggle': function(){this.model.toggle();}
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