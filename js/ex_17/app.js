const guests4 = ["Aashir", "Amin", "Abdullah"]

// Cant get the table
document.write("You can invite only two peoples for dinner <br /> <br />")

// Remove people from list
document.write("I am sorry " + guests4.pop() + " I cannot invite you to dinner <br /> <br />")

document.write(
    guests4.map((g4) => (
        `${g4} you are still invited to dinner. <br />`
    ))
)

// Empty your list 
guests4.pop() 
guests4.pop()
document.write("Empty List: []") 
