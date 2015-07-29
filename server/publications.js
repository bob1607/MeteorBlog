Meteor.publish("posts",function(){
	return Posts.find();
});

Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
})

Meteor.publish("usersDetailsAdmin", function(){
	if(Roles.userIsInRole(this.userId, 'admin')){
		return Meteor.users.find({});
	}
});