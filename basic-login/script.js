let username = prompt("Who is there? ");

if (username === "Admin"){
    let password = prompt("What is your password?");
    if (password === "TheMaster"){
        alert("You have successfuly logged in");
    }
    else if (password === '' || password === null){
        alert("Operation cancled due to no input!");
    }
    else{
        alert("The password you entered is incorrect")
    }
}else if (username === '' || username === null){
    alert("Operation cancled due to no input!");
}else{
    alert("The username you entered is incorrect")
}