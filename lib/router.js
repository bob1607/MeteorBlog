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

Router.route("/admin/posts/new", {
	name: "postsAdd"
});

Router.route("/admin/posts/:alias/edit", {
	name: "postsEdit",
	data: function(){
		return Posts.findOne({alias: this.params.alias});
	}
});

Router.route("/about", {
	name: "aboutMain"
});

var requireAdminRights = function(){
	if(!Roles.userIsInRole(Meteor.user(), "admin")){
		if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
	} else {
		this.next();
	}
}

Router.onBeforeAction(requireAdminRights, {only: "postsAdd"});
Router.onBeforeAction(requireAdminRights, {only: "postsEdit"});