function Make_Shirt(size3, message3, size1 = "Large", message = "I Love Javascript", size2 = "Medium", message2 = "I Love Typescript") {
    document.write(`
    Size1: ${size1} ,  Message: ${message} <br /> 
    Size2: ${size2} , Message: ${message2} <br /> 
    Size3: ${size3} , "Message3":${message3}
    `)

}
Make_Shirt("Extra Large", "Programming")
// Make_Shirt("Extra Large" , "I love Programming")