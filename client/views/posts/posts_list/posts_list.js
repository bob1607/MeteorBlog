Template.postsList.helpers({
	posts: function(){
		return Posts.find({}, {sort: {created : -1}});
	}
});