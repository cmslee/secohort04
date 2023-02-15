console.log("<--- creating arrays --->");

// Literal Array
const numbers = [2, 5, "8"];

console.log(numbers);
console.log(numbers.length);
console.log(numbers[2]);

// Movies Array

const movies = ["Spirited Away", "Inception", "Center Stage: Ruan Lingyu"];
console.log(movies);
console.log(movies[2]);

const favMovie = movies[1];
console.log(favMovie);

// Update/mutating value in an array
movies [0] = "Knives Out";
movies [5] = "JJK0"; //adds new movie using square brackets
console.log(movies);

movies.push("Moonlight", "Face-off");
console.log(movies);

movies.unshift("In the Mood for Love")
console.log(movies);

const removedMovie = movies.pop()

movies.shift()

console.log(movies);
console.log(removedMovie);

// Splicing items
// add/remove any # of elements to/from an array with single line of code

// 3 p's of data: start, delete count, "new item 1", "new item 2", etc.
movies.splice(3, 2, "Fifty First Dates", "Ikiru", "Millenial Actress")
console.log(movies)

// forEach: iterate over all elemens with specific function(s)

movies.forEach(function(movie, idx){
    console.log(idx + " " + movie)
});


// For of Loop

for (let movie of movies) {
    console.log(movie);
}

// For Loop

for(let i = 0; i < movies.length; i++){
    console.log(movies[i]);
}

// *These three will have same result, but different syntax. *For Loop is wordiest.


// Array.prototype.slice to copy all or some of an array

const lastTwoMovies = movies.slice(6, 8)

lastTwoMovies.push("Ratatouille");

console.log(lastTwoMovies);


// Spread Operator: spreading strings in Array into New Array

const moviesCopy = [...movies, "Troop Zero"]
console.log(moviesCopy)

// Join too create a Single String from an Array

const moviesStr = moviesCopy.join(", ")
console.log(moviesStr);