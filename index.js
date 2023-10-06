let username = prompt("Enter a username: ");

// userDatabase
const userDatabase = {
    "kay123": {
        firstname: "Kay",
        lastname: "Sam",
        email: "adeyemioluwakayode73@gmail.com",
        password: "kayode1",
        accountActivated: true
    },
    "kay223": {
        firstname: "Kayo",
        lastname: "Samu",
        email: "adeyemioluwakayode7@gmail.com",
        password: "kayode2",
        accountActivated: false
    },
    "kay323": {
        firstname: "Kayod",
        lastname: "Samue",
        email: "adeyemioluwakayode3@gmail.com",
        password: "kayode3",
        accountActivated: true
    },
    "kay124": {
        firstname: "Kayode",
        lastname: "Samuel",
        email: "adeyemioluwakayode@gmail.com",
        password: "kayode4",
        accountActivated: false
    }
}
const validateUser = (username) => { // username
    if (username == null) {
        return
    }
    while (username.length > 10) {
        username = prompt("Enter a username: Username must be less than 10");
    }

    // password
    let password = prompt("Enter password: ");
    if (password == null) {
        return
    }
    while (password.length < 6) {
        password = prompt("Enter password: Password must be greater than 6");
    }

    // confirm password
    let confirmPassword = prompt("Confirm Password: ")
    if (confirmPassword == null){
        return
    }
    if (confirmPassword !== password) {
        alert("Password does not match")

    }
    const user = userDatabase[username]
    const userPassword = userDatabase[password]

    if (user == undefined) {
        alert("user not found! Please register on the app")
        return
    }

    if (userPassword == undefined) {
        alert("You've entered an incorrect password!")
        return
    }
    
    alert(`
    User found with the following details,
    First Name: ${user.firstname}
    Last Name: ${user.lastname}
    Email: ${user.email}
    Account Activated: ${user.accountActivated}
    `)
};
validateUser(username);
alert("You have come to the end of this program! GoodBye")

