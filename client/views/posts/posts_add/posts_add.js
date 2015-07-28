Template.postsAdd.events({
	"submit form" : function(e){
		e.preventDefault();
		var post = {
			title: $(e.target).find('[name=title]').val(),
			content: $(e.target).find('[name=content]').val(),
		};
		
		Meteor.call("createPost", post.title, post.content, function(error, result){
			if(error){
				return alert(error.reason);
			}
			
			if(result.aliasAlreadyExists){
				return alert("This alias already exists. Choose another title");
			}
			
			Router.go("postFull", {alias: result.alias});
		});
	}
});