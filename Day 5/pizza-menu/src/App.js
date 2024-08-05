import "./App.css";
import pizzaData from "./Pizzas.js"

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Pizza by the bay</h1>
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;

	return (
		<main className="menu">
			<h2>Our Menu</h2>

			{pizzas.length > 0 ? (
				<ul className="pizzas">
					{pizzas.map((pizza) => (
						<Pizza pizzaObj={pizza} key={pizza.name} />
					))}
				</ul>
			) : (
				<p>
					We're still working on our menu. Please come back later :?
				</p>
			)}
		</main>
	);
}

function Pizza({ pizzaObj }) {
	// if(pizzaObj.soldOut) {
    //     return null;
    // }
	
	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				{/* <span>{pizzaObj.price}</span> */}
				<span>{pizzaObj.soldOut ? `${pizzaObj.price} SOLD OUT` : pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 10;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;

	// if (!isOpen) {
	// 	return <h1>CLOSED</h1>;
	// }

	return (
		<footer className="footer">
			{isOpen ? (
				<p>
					We're open from {openHour}:00 to {closeHour}:00. Come visit
					us or order online.
				</p>
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 and{" "}
					{closeHour}:00.
				</p>
			)}
		</footer>
	);
}

export default App;
