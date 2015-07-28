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
				aliasAlreadyExists : true,
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
	},
	
	postsUpdate: function(currentAlias, newTitle, newContent){
		var newAlias = newTitle.replace(/ |'|"/g, "-");
		
		var postWithSameAlias = Posts.findOne({alias: newAlias});
		if(postWithSameAlias){
			return {
				aliasAlreadyExists : true,
				alias: postWithSameAlias.alias
			}
		}
		
		Posts.update({alias: currentAlias}, {
			$set : {
				title: newTitle,
				alias: newAlias,
				content: newContent
			}
			});
		
		return {
			title: newTitle,
			alias: newAlias,
			content: newContent
		};
		
	},
	
	postsDelete: function(aliasToDelete){
		var checkPostExistence = Posts.findOne({alias : aliasToDelete});
		
		if(checkPostExistence){
			Posts.remove({alias: aliasToDelete});
			return {
				postExistence : true,
				deleted : true	
			};
		} else {
			return {
				postExistence : false
			};
		}
	}
});