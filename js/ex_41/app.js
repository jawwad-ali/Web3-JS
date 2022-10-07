function Show_Magicians(magician1 = []) {
    const m_name = magician1.map(name => name)
    document.write(m_name)
    return m_name
}
Show_Magicians(["Peter", "Siddle", "Mitchell"])