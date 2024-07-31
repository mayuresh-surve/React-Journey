# 🚀 React Learning Journey: Day 2 🚀

On Day 2 of my React Learning Journey, I focused on revising some crucial JavaScript concepts that are essential for working with React. Here's a summary of what I learned:

### Books Array
To illustrate different concepts, I'll be using an array of book objects. This array contains information about various books, including their titles, authors, genres, publication dates, and reviews.

```javascript
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["fantasy", "high-fantasy", "adventure", "fiction", "novels", "literature"],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: ["science fiction", "humor", "speculative fiction", "short stories", "fantasy"],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];
```

## Destructuring Objects and Arrays

Destructuring is a convenient way of extracting values from objects and arrays. It allows us to unpack values from arrays or properties from objects into distinct variables.

**Destructuring Objects:**
 

```javascript
const { author, title, pages, publicationDate, genres, hasMovieAdaptation } = book;
console.log(title, author); // Output: 'The Lord of the Rings', 'J. R. R. Tolkien'
```

**Destructuring Arrays:**

```javascript
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre); // Output: 'fantasy', 'high-fantasy'
```

## Rest and Spread Operator

The rest operator `...` allows us to collect all remaining elements into an array. The spread operator `...` allows us to spread elements from an array or object into another array or object.

**Rest Operator:**

```javascript
const [genreOne, genreTwo, ...otherGenre] = genres;
console.log(otherGenre); // Output: ['adventure', 'fiction', 'novels', 'literature']
```

**Spread Operator in Arrays:**

```javascript
const newGenres = [...genres, 'romantic'];
console.log(newGenres); // Output: ['fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature', 'romantic']
```

**Spread Operator in Objects:**

```javascript
const updatedBook = { ...book, moviePublicationDate: '2001-12-19' };
console.log(updatedBook); // This will add a new property 'moviePublicationDate' to the book object
```

## Arrow Functions

Arrow functions provide a concise syntax for writing functions in JavaScript. They are particularly useful when you need to maintain the context of `this`.

**Traditional Function:**

```javascript
function getYear(str) {
  return str.split('-')[0];
}
console.log(getYear(publicationDate)); // Output: '1954'
```

**Arrow Function:**

```javascript
const yearReleased = (str) => str.split('-')[0];
console.log(yearReleased(publicationDate)); // Output: '1954'
```

## Array Map Method

The `map` method creates a new array by applying a function to each element of an existing array.

```javascript
const titles = allBooks.map((book) => book.title);
console.log(titles); // Output: ['The Lord of the Rings', 'The Cyberiad', 'Dune', 'Harry Potter and the Philosopher's Stone', 'A Game of Thrones']
```

## Array Filter Method

The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const longBooks = allBooks.filter((book) => book.pages > 500);
console.log(longBooks); // This will print all book objects that have more than 500 pages
```

## Array Reduce Method

The `reduce` method applies a function against an accumulator and each element in the array to reduce it to a single value.

```javascript
const pagesAllBooks = allBooks.reduce((sum, book) => book.pages + sum, 0);
console.log(pagesAllBooks); // Output: 3227
```

## Array Sort Method

The `sort` method sorts the elements of an array in place and returns the sorted array.

```javascript
const temp = [3, 2, 6, 1, 5, 10, 8];
const sorted = temp.slice().sort((a, b) => a - b);
console.log(sorted); // Output: [1, 2, 3, 5, 6, 8, 10]
```

## JavaScript Promises

Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => console.log(data[0].title));
```

## JavaScript Async/Await

`async/await` is a modern syntax for handling asynchronous operations, making code easier to read and write.

```javascript
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}
```

These JavaScript concepts are fundamental for developing applications with React, as they help manage state, perform asynchronous operations, and efficiently manipulate data. I look forward to applying these concepts as I continue my journey with React!

For more detailed information on these concepts, you can refer to the [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
