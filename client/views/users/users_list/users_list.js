Template.usersList.helpers({
	users: function(){
		var users = Meteor.users.find({});
		
		if(!users){
			return alert("No user found");
		} else {
			return users;
		}
	}
});

