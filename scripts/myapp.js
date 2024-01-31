//Data Base information
let userDB = "Tom";
let passDB = "123";

function login(){
    // get the username and password from the user using a prompt
    let userName=prompt("Enter your username: ");
    let userPassword=prompt("Enter your password: ");
    console.log(userName, userPassword);
    //2. compare the passDB with the variable
    if(userName===userDB && userPassword === passDB){
        document.getElementById("notifications").innerHTML="<p>Welcome to canvas</p>";
    }else{
        document.getElementById("notifications").innerHTML="<p class='alert-error'>Invalid username or password</p>";
    }

    //3. display on the HTML welcome to the system or invalid credentials
}
