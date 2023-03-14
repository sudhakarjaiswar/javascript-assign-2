
// Question-1 //

// setTimeout(() => {
//     console.log("This is the first message");

// }, 2000 );
// setTimeout(() => {
//     console.log("message first the is this");
// }, 3000 );

// Question - 2 //

// function oneMoreHello () {
//     console.log("Hello Sudhakar ! ", Math.random());
// }
// setInterval(oneMoreHello, 1000)

// Question - 3 //

// const array = [1, 4, 9, 16];
// const map = array.map(x => x * 80);
// console.log(map);

// Qustion -4 //

// const  heroes = ["ajayraj", "amitabh", "abhishekraj", "hritikraj", "ranveer"]

// heroes.forEach((el) => {console.log(el.toUpperCase())})

// console.log(heroes);
// const heroesWithRaj = heroes.filter((h) => {
//     return h.endsWith('raj')
// })
// console.log(heroesWithRaj);

// const books = [
//     {
//         id: 1, 
//         booksName: "the problems of rupees",
//         authorName: "ambedkar",
//         year: 1945
//     },

//     {
//         id: 2, 
//         booksName: "the constitution of India",
//         authorName: "bhimraoambedkar",
//         year: 1950
//     },

//     {
//         id: 3,
//         booksName: "gitanjali",
//         authorName: "rabindranth tagore",
//         year: 1949
//     }
// ]
// books.filter(book => {
//     const authorNameUpper = book.authorName.toUpperCase()
//     console.log(authorNameUpper)
// })
// console.log(books);

// Question - 5 //

let url = "https://www.sudhakar@pw.live";
let pattern = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(pattern.test(url));

// question - 6 //

let linkedinUrl = "https://www.linkedin.com";
let result = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(result.test(linkedinUrl));






