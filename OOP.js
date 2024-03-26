class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewdata(){
        console.log("Name: ",this.name);
        console.log("Email: ",this.email);
    }
}

class Admin extends User{

    constructor(name,email){
        super(name,email);
    }

    editData(newName,newEmail){
        super.name = newName;
        super.email = newEmail;
    }
}

let admin = new Admin("Muhammad Tayyab", "its.tayyab616@gmail.com");
console.log(admin);
admin.viewdata()
console.log("Changing data");
new_name = prompt("Enter new Name");
new_mail = prompt("Enter New mail address");
admin.editData(new_name,new_mail);
admin.viewdata();