// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// let count = 0
// let countEl = document.getElementById("count-el")

// function increment() {
//   count = count + 1
//   document.getElementById("count-el").innerText = count
// }

// function save() {
//   let savedCount = document.getElementById("count-el").innerText
//   console.log(savedCount)
// }


// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

// let welcomeEl = document.getElementById("welcome-el")

// let name = " Anthonette Oghale Agbadu"
// let greeting = " Welcome back"

// welcomeEl.textContent = greeting + "," + name

// // 1. Grab the save-el paragrah and store it in a variable called saveEl
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//   count += 1
//   countEl.textContent = count
// }

// function save() {
//   // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//   let countPrevs = count + " - "
//   // 3. Render the variable in the saveEl using innerText
//   saveEl.textContent += countPrevs  //It's better practice to use textContent instead of innerText (check mdn website)
//   // NB: Make sure to not delete the existing content of the paragraph
//   console.log(countPrevs)
// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr
  count = 0
  countEl.textContent = count
}