const names = [
    "Aashir",
    "Amin",
    "Abdullah"
]
document.write("Friend 1: " + names[0] + " <br />")
document.write("Friend 2: " + names[1] + " <br />")
document.write("Friend 3: " + names[2] + " <br /> <br />")

const accessElem = names.map((name) => (
    `What is your plan for tonight ${name} <br />`
))

document.write(accessElem)