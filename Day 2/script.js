const data = [
	{
		id: 1,
		title: "The Lord of the Rings",
		publicationDate: "1954-07-29",
		author: "J. R. R. Tolkien",
		genres: [
			"fantasy",
			"high-fantasy",
			"adventure",
			"fiction",
			"novels",
			"literature",
		],
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
		genres: [
			"science fiction",
			"humor",
			"speculative fiction",
			"short stories",
			"fantasy",
		],
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

function getBooks() {
	return data;
}

function getBook(id) {
	return data.find((d) => d.id === id);
}

const book = getBook(1);

//Destructuring Objects
const { author, title, pages, publicationDate, genres, hasMovieAdaptation } =
	book;
console.log(title, author); //Output: [ 'The Lord of the Rings', 'J. R. R. Tolkien' ]

//Destructuring Arrays
const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre); //Output: [ 'fantasy', 'high-fantasy' ]

//Rest Operator
const [genreOne, genreTwo, ...otherGenre] = genres;
console.log(otherGenre); //Output: [ 'adventure', 'fiction', 'novels', 'literature' ]

//Spread Operator in Arrays
const newGenres = [genres, "romantic"];
console.log(newGenres); //Output: [[ 'fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature' ], 'romantic' ]

const updateGenres = [...genres, "romantic"];
console.log(updateGenres); //Output: [ 'fantasy', 'high-fantasy', 'adventure', 'fiction', 'novels', 'literature', 'romantic' ]

//Spread Operator in Objects
const updatedBook = { ...book, moviePublicationDate: "2001-12-19" };
console.log(updatedBook); //This will add new property 'moviePublicationDate' to book with id 2.

//Tradition way of writing functions
function getYear(str) {
	return str.split("-")[0];
}
console.log(getYear(publicationDate)); //Ouput: '1954'

//Arrow function
const yearReleased = (str) => str.split("-")[0];
console.log(yearReleased(publicationDate)); //Output: '1954'

//Array map method
const numArray = [2, 3, 4, 5, 6];
const doubledArray = numArray.map((num) => num * 2);
console.log(doubledArray); //Output: [ 4, 6, 8, 10, 12 ]

const allBooks = getBooks();
const titles = allBooks.map((book) => book.title); // This will create an array of all book titles
console.log(titles); //Output: [ 'The Lord of the Rings', 'The Cyberiad', 'Dune', 'Harry Potter and the Philosopher's Stone', 'A Game of Thrones' ]

//Array filter method
const longBooks = allBooks.filter((book) => book.pages > 500);
console.log(longBooks); // This will print all book objects that has more than 500 pages

const longBooksWithMovieAdaptation = allBooks
	.filter((book) => book.pages > 500)
	.filter((book) => book.hasMovieAdaptation); //We can chain multiple filters like this
console.log(longBooksWithMovieAdaptation); //This will print long books and has movie adaptation

const adventureBooks = allBooks
	.filter((book) => book.genres.includes("adventure"))
	.map((book) => book.title); //This is a way of chaining multiple array method
console.log(adventureBooks); //Output: [ 'The Lord of the Rings', 'Dune', 'Harry Potter and the Philosopher's Stone' ]

//Array reduce method
const pagesAllBooks = allBooks.reduce((sum, book) => book.pages + sum, 0); // This will count total pages of all the books
console.log(pagesAllBooks); //Output: 3227

//Array sort method
const temp = [3, 2, 6, 1, 5, 10, 8];
const sorted = temp.slice().sort((a, b) => a - b); //This will sort array in ascending order
console.log(sorted); //Output:[ 1, 2, 3, 5, 6, 8, 10 ]

//JavaScript Promises
fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => response.json())
	.then((data) => console.log(data[0].title));

//JavaScript Async/Await
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data[0].title);
  return data;
}
