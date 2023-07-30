var person = {
    firstName : "Sabbir",
    lastName : "Hosen",
    email : "xyz@gmail.com",
    age : 22,
    skills : ["html", "css", "javascript"],
    display : function(){
        console.log("First Name : " + this.firstName + " last Name : " + this.lastName);
    },
    displaySkills : function(){
        this.skills.forEach(function(e){
            console.log(e);
        });
    }
};

person.display();
person.displaySkills();