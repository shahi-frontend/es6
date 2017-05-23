"use strict";

class User{
	constructor(name, email, password){
		this.name = name;
		this.email = email;
		this.password = password;
	}

	static countUsers(){
		console.log("There are 50 users");
	}

	register(){
		console.log(this.name + " got registered!");
	}
}

class Member extends User{
	constructor(name, email, password, memberPackage){
		super(name, email, password);
		this.memberPackage = memberPackage;
	}

	getPackage(){
		console.log(this.name + " subscribed to " + this.memberPackage);
	}
}

let mike = new Member("Mike Ross", "ross@pearson.com", "rachel@123", "Standard Package");

let harvey = new User("Harvey Specter", "specter@pearson.com", "donna@123");

mike.register();
harvey.register();
mike.getPackage();

User.countUsers();
