const guests2 = ["Aashir", "Amin", "Abdullah"]

//  Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
document.write(guests2[2] + " cannot make it to the dinner <br />")

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guests2[2] = "Anas"

// Print a second set of invitation messages, one for each person who is still in your list.
document.write("<br />")
document.write(guests2.map((g) => (
    `I would like to invite you ${g} for dinner ` + "<br/>"
))) 