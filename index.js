console.log("TEST 2022-11-03 - 02")
let x = 34;
console.log(typeof(x))

let myString = "my first string"
console.log("type of string ->", typeof(myString))
console.log("myString ->", myString)
console.log("myString ->", myString)
let myStringDoubleApo = "my \"first string\""
console.log("myStringDoubleApo ->", myStringDoubleApo)

let myStringBSlash = "my \\ \"first string\""
console.log("myStringBSlash ->", myStringBSlash)

let myStringNLine = "my \n \"first string\""
console.log("myStringNLine ->", myStringNLine)

let myStringLength = "my \n \"first string\""
console.log("myStringNLine ->", myStringNLine.length)

let myStringOrig = "my first string"
let myStringOrigSliced = "my first string".slice(3, 6)

console.log("myStringOrig -- myStringOrigSliced ->", myStringOrig, "--", myStringOrigSliced)


let myStringOrigSlicedTwo = "my first string".slice(3)
console.log("myStringOrigSlicedTwo -> ", myStringOrigSlicedTwo)

let myStringOrigSlicedThree = "my first string".slice(-3)
console.log("myStringOrigSlicedThree -> ", myStringOrigSlicedThree)


let myStringOrigSubstr = "my first string".substr(2, 4)
console.log("myStringOrigSubstr -> ", myStringOrigSubstr)

let myStringRepl = "my first string".replace("first", "second")
console.log("myStringRepl -> ", myStringRepl)

let myStringReplTwo = "my first first string".replace("first", "second")
console.log("myStringReplTwo -> ", myStringReplTwo)

let myStringReplTrhee = "my first first string".replaceAll("first", "second")
console.log("myStringReplTrhee -> ", myStringReplTrhee)

let myStringCatWithPlus = "my first first string" + " added string"
console.log("myStringCatWithPlus -> ", myStringCatWithPlus)

let numToStr = 3
console.log("numToStrNum, numToStrStr -> ", numToStr, numToStr.toString())

let strCharAt = "Test"
console.log("strCharAt", strCharAt.charAt(2), strCharAt.substr(2, 1))
