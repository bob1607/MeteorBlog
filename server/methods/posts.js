Meteor.methods({
	createPost: function(title, content){
		var user = Meteor.user();
		var alias = title.replace(/ |'|"/g, "-");
		var created = new Date();
		var resumeText = content.substring(0, 255);
		
		var post = {};
		
		var postWithSameAlias = Posts.findOne({alias: alias});
		if(postWithSameAlias){
			return {
				aliasAlreadyExist : true,
				alias: postWithSameAlias.alias
			}
		}
		
		post.title = title;
		post.content = content;
		post.owner = user._id;
		post.alias = alias;
		post.created = created;
		post.resumeText = resumeText;
		
		var postId = Posts.insert(post);
		
		return {
			_id : postId,
			alias : post.alias
		};
	}
});