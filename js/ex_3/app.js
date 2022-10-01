var personName = "ali"
document.write(" Lowercase: " + personName.toLowerCase())

document.write(
    "<br /> Uppercase: " +
    personName.slice(0, 1).toUpperCase() + personName.slice(1)
)

document.write(
    "<br /> Titlecase: " +
    personName.toUpperCase()
)