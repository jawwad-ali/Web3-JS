function Show_Magicians(magician2 = []) {
    const m_name = magician2.map(name => `Great ${name} `)
    document.write(m_name)
    return m_name
}
Show_Magicians(["Peter", "Siddle", "Mitchell"])