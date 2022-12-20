// Simple regex testing (testing for a substring)

const textString = 'I love coconuts with berbere'
const regEx = /love/
const exists = regEx.test(textString)

console.log(exists)




//Caret sign and the money sign

const textString2 = 'Rahwa'
const regEx2 = /^Rahwa$/
const exists2 = regEx2.test(textString2)

console.log(exists2)




//Character classes

// [a-z][a-zA-Z0-9] ==> ranges
//{1,3}{2} ==> Checking for length of the characters
//+ ==> one or more
//* ==> Zero or more
//? ==> Makes it optional
//\w ==> matches any word character equal to a-z, A-Z, 0-9, _
//\d ==> matches any arbitrary string of digits
//\s ==> For verifying spaces
//\t ==> For tabs





//extracting a substring using grouping

const text = 'My name is Rahwa and I turned 25 last month'
const regExText = /My name is ([a-zA-z]+)/
const match = regExText.exec(text)

if(match){
    const myName = match[1]
    console.log(match)
    console.log(myName)
}
else{
    console.log('There is no match')
}




//Using flags

const string = 'I want to buy blue car with a Blue tyres and blue windows'
const regExword = /blue (\w+)/gi
let match2 = regExword.exec(string)

while(match2){
    console.log(match2[1])
    match2 = regExword.exec(string)
}


