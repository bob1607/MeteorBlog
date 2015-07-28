Meteor.publish("posts",function(){
	return Posts.find();
});

Meteor.publish(null, function (){ 
  return Meteor.roles.find({})
})