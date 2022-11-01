let x = "Tomm";
let y = "Moore";
let a;
let b;

 const person = {
    firstName: "John",
    lastName : "Doe",
    fullName : function () {
      return this.firstName + " " + this.lastName;
    },
    nameChange : function (a, b) {
        this.firstName = a,
        this.lastName = b;
    }


  };

  console.log(person.fullName());
  person.nameChange("Hej", "Då");
  console.log(person.fullName());