Template.postsAdd.events({
	"submit form" : function(e){
		e.preventDefault();
		var post = {
			title: $(e.target).find('[name=title]').val(),
			content: $(e.target).find('[name=content]').val(),
			created: new Date()
		};
		
		Posts.insert(post);
		
		Router.go("/");
	}
});