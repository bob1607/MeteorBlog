Router.configure({
	layoutTemplate : "layout",
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