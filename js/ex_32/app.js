const allusers = []
const current_users = ["Virat", "Babar", "Kane", "Smith", "Root"]
const new_users = ["Shaheen", "Haris", "Babar", "Root", "Shah"]


for (var i = 0; i < new_users.length; i++) {
    // console.log("NEWS_USERS", new_users)
    for (var j = 0; j < current_users.length; j++) {
        // console.log("CURRENT_USERS", current_users)
        if (new_users[i] === current_users[j]) {
            document.write("Please select a new user name ", new_users[i], " has already been selected. <br />")
        }
    }
}