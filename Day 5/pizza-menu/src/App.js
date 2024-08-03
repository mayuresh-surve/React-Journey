import "./App.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "https://imgur.com/C3Ca4BS.png",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "https://imgur.com/lipmW8F.png",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "https://imgur.com/APdaPZR.png",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "https://imgur.com/dPpvWzM.png",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "https://imgur.com/9dtZJNE.png",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "https://imgur.com/jii9M6S.png",
	},
];

function App() {
	return (
		<>
			<Menu />
			<Footer />
		</>
	);
}

function Menu() {
	const pizzas = pizzaData;

	return (
		<>
			<h1>Our Menu</h1>

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
		</>
	);
}

function Pizza({ pizzaObj }) {
    if(pizzaObj.soldOut) {
        return null;
    }

	return (
		<li className="pizza">
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 13;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	if (!isOpen) {
		return <h1>CLOSED</h1>;
	}

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
