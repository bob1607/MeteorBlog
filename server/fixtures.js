if(Posts.find().count() === 0){
	Posts.insert({
		title: "Welcome to my blog",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra eget justo lobortis porta. Integer ornare lacus in velit dictum auctor. Maecenas eu arcu vitae nulla mollis consequat sit amet nec tortor. Praesent rhoncus mi vel lobortis tincidunt. Mauris tristique vehicula est, sit amet varius turpis pellentesque ut. Suspendisse ac commodo elit. Sed dignissim congue lacus, a viverra turpis accumsan varius. Pellentesque laoreet magna eget pulvinar congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur accumsan, enim ut pellentesque vehicula, eros leo fringilla erat, vitae imperdiet ante velit a tellus. Donec sed felis a turpis placerat auctor at vel dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In fermentum id leo placerat fringilla. Sed a bibendum nunc. Curabitur ornare neque mauris, sed placerat urna imperdiet vel. Proin eu maximus leo.",
		resumeText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra eget justo lobortis porta. Integer ornare lacus in velit dictum auctor.",
		alias: "welcome-to-my-blog",
		created: new Date()
	});
	
	Posts.insert({
		title: "Another post",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra eget justo lobortis porta. Integer ornare lacus in velit dictum auctor. Maecenas eu arcu vitae nulla mollis consequat sit amet nec tortor. Praesent rhoncus mi vel lobortis tincidunt. Mauris tristique vehicula est, sit amet varius turpis pellentesque ut. Suspendisse ac commodo elit. Sed dignissim congue lacus, a viverra turpis accumsan varius. Pellentesque laoreet magna eget pulvinar congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur accumsan, enim ut pellentesque vehicula, eros leo fringilla erat, vitae imperdiet ante velit a tellus. Donec sed felis a turpis placerat auctor at vel dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In fermentum id leo placerat fringilla. Sed a bibendum nunc. Curabitur ornare neque mauris, sed placerat urna imperdiet vel. Proin eu maximus leo.",
		resumeText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra eget justo lobortis porta. Integer ornare lacus in velit dictum auctor.",
		alias: "another-post",
		created: new Date() - 10000
	});
	
	Posts.insert({
		title: "All the posts are the same",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra eget justo lobortis porta. Integer ornare lacus in velit dictum auctor. Maecenas eu arcu vitae nulla mollis consequat sit amet nec tortor. Praesent rhoncus mi vel lobortis tincidunt. Mauris tristique vehicula est, sit amet varius turpis pellentesque ut. Suspendisse ac commodo elit. Sed dignissim congue lacus, a viverra turpis accumsan varius. Pellentesque laoreet magna eget pulvinar congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur accumsan, enim ut pellentesque vehicula, eros leo fringilla erat, vitae imperdiet ante velit a tellus. Donec sed felis a turpis placerat auctor at vel dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In fermentum id leo placerat fringilla. Sed a bibendum nunc. Curabitur ornare neque mauris, sed placerat urna imperdiet vel. Proin eu maximus leo.",
		resumeText : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra eget justo lobortis porta. Integer ornare lacus in velit dictum auctor.",
		alias: "all-the-posts-are-the-same",
		created: new Date() - 150000
	});
}