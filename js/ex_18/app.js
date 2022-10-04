var cities = ["Melbourne", "Auckland", "Mumbai", "London", "Dublin"]

document.write(
    "Original Order: ",
    cities.slice(0)
)

document.write(
    "<br /> Alphabetical Order: ", cities.slice(0).sort()
)

document.write(
    "<br /> Original Order: ",
    cities.slice(0)
)  

document.write(
    "<br /> Reverse Order: ",
    cities.reverse()
)

document.write(
    "<br /> Back at original form: ",
    cities.reverse()
)

document.write(
    "<br /> Sorting: ",
    cities.sort()
)

document.write(
    "<br /> Sort and Reverse: ",
    cities.sort(),
    // cities.reverse()
)