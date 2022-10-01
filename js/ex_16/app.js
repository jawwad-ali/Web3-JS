const guests3 = ["Aashir", "Amin", "Abdullah"]
document.write("I have found a bigger table for dinner. <br /><br />")

// Adding friend at start a list
guests3.unshift("Hussain")

// Adding friend at middle of  a list
guests3.splice(2, 0, 'Zahir');
guests3.push("Noman");

document.write(
    guests3.map((person) => (
        `I would like to invite you ${person}` + "<br />"
    ))
)