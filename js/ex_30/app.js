var user_names = ["Ali", "Aashir", "Amin", "Abdullah", "Admin"]

if(!user_names.length){
    document.write("list is empty")
}

for (var username of user_names) {
    if (username === "Admin") {
        document.write("Hello Admin, would you like to see a status report? <br />")
    }
    else {
        document.write(`Hello ${username}, thank you for logging in again. <br />`)
    }
}