const animals = ["Goat", "Sheep", "Cow"]
for (var animal of animals) {
    document.write(animal, ",")
}

document.write("<br />")

for (var anim of animals) {
    document.write(`A ${anim} would be great of this year's sacrifice. <br />`)
}