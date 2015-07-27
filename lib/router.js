Router.configure({
	layoutTemplate : "layout",
	notFoundTemplate: "notFound",
	loadingTemplate: "loading",
	waitOn : function(){
		return Meteor.subscribe("posts");
	}
});

Router.route("/", {
	name: "postsList"
});

Router.route("posts/:alias", {
	name:"postFull",
	data: function(){
		return Posts.findOne({alias : this.params.alias});
	}
});

Router.route("/posts/new", {
	name: "postsAdd"
});