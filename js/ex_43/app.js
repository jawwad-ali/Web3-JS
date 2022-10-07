const new_magician = []

function Show_Magicians(magician3 = []) {


    const m_name = magician3.map(name => name)
    new_magician.push(m_name)
    document.write(new_magician , "<br />")

    const great_magician = magician3.map(name => name)
    document.write(`Great ${great_magician}`)

    return new_magician

    // return m_name
}
Show_Magicians(["Peter", "Siddle", "Mitchell"])