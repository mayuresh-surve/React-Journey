import "./App2.css";
import PropTypes from "prop-types";

function App2() {
	return (
		<div className="container">
			<Profile
				name="Jim Bolt"
				email="jimbolt@example.com"
				photo="profile.jpg"
			/>
		</div>
	);
}

function Profile(props) {
	return (
		<>
			<h1>Users</h1>
			<Avatar
				name="John Doe"
				email="johndoe@example.com"
				photo="profile.jpg"
			/>
			<Avatar
				name="Micheal Stone"
				email="michealstone@example.com"
				photo="profile.jpg"
			/>
			<Avatar email="xyz@example.com" photo="profile.jpg" />
			{/*Forwarding props with the JSX spread syntax*/}
			<Avatar {...props} />{" "}
		</>
	);
}

// Traditional way of passing props
// function Avatar(props) {
// 	return (
// 		<div className="user-info">
// 			<div className="avatar">
// 				<img src={props.photo} alt="Profile" />
// 			</div>
// 			<div class="user-details">
// 				<h3 class="user-name">{props.name}</h3>
// 				<p class="user-email">{props.email}</p>
// 			</div>
// 		</div>
// 	);
// }

// Assigning default values to the prop
Avatar.defaultProps = {
	name: "Abby Ken",
};

// Defining data types of props
Avatar.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	photo: PropTypes.string,
}

//By destructing props object
function Avatar({ name, email, photo }) {
	return (
		<div className="user-info">
			<div className="avatar">
				<img src={photo} alt="Profile" />
			</div>
			<div class="user-details">
				<h3 class="user-name">{name}</h3>
				<p class="user-email">{email}</p>
			</div>
		</div>
	);
}


export default App2;
