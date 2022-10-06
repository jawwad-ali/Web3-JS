const current_users = ["Virat", "Babar", "Kane", "Smith", "Root"]
const new_users = ["Shaheen", "Haris", "Babar", "Root", "Shah"] 

for (var i = 0; i < new_users.length; i++) {
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i] === current_users[j]) {
            document.write("Please select a new user name ", new_users[i], " has already been selected. <br />")
        }
    }
}

// const UserName = prompt("Enter name")

// if (current_users.includes(UserName)) {
//     document.write("Username already taken")
// }
// else {
//     document.write("Welcome ", UserName)
// }