Template.postsEdit.events({
	"submit form" : function(e){
		var currentId = this._id;
		
		var postProperties = {
	      title: $(e.target).find('[name=title]').val(),
	      content: $(e.target).find('[name=content]').val()
    	};
		
		Meteor.call("postsUpdate", currentId, postProperties.title, postProperties.content, function(error, result){
			
		});
		
	}
});