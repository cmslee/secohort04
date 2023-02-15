
typeof(15)
// Prediction: number
// Actual: number
console.log(typeof 15)

typeof(5.5)
// Prediction: number
// Actual: number
console.log(typeof 5.5)

typeof(NaN)
// Prediction: NaN
// Actual: number
console.log(typeof NaN)
//there are some kinds of values that are predetermined or can have default typeof's? numbers kind of have this and NaN is related?

typeof("hello")
// Prediction: string
// Actual: string
console.log(typeof "hello")

typeof(true)
// Prediction: Boolean
// Actual: boolean
console.log(typeof true)

typeof(1 != 2)
// Prediction: number
// Actual: true
console.log(typeof 1 != 2)
// != is non-equal operation and, in this case, what it expresses is true

"Ostentatiou" + "s"
// Prediction: Ostentatious
// Actual: Ostentatious
console.log("Ostentatiou" + "s")

"Facetious" - "s"
// Prediction: Facetiou
// Actual: NaN
// Actual typeof: number
console.log("Facetious" - "s")
console.log(typeof ("Facetious" - "s"))
//whereas + when it comes to Strings is concatenation, - is a exclusively a math/number operator.

"1" + "5"
// Prediction: 15
// Actual: 15
// Actual typeof: string
console.log("1" + "5")
console.log( typeof ("1" + "5"))

"1" - "5"
// Prediction: Nan
// Actual: -4
// Actual typeof: number
console.log("1" - "5")
console.log(typeof ("1" - "5"))
//apparently - is so math that it will try to read strings as #'s when possible; i.e. not all operators will work across different/all data types.

"ivory" + "5"
// Prediction: ivory5
// Actual: ivory5
// Actual typeof: string 
console.log("ivory" + "5")
console.log(typeof ("ivory" + "5"))

"ivory" - "5"
// Prediction: Nan
// Actual: NaN
// Actual typeof: number
console.log("ivory" - "5")
console.log(typeof ("ivory" - "5"))

99 - "cheese rolling"
// Prediction: Nan
// Actual: NaN
// Actual typeof: number
console.log(99 - "cheese rolling")
console.log(typeof (99 - "cheese rolling"))