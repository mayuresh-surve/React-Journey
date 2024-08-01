import Welcome from "./Welcome";
import Greeting from "./Greeting";

function Test() {
    // Welcome is an example Function Component
    // Greeting is an example of Class component
	return (
		<div>
			<Welcome name="Alice" />
			<Welcome name="Bob" />
			<Welcome name="Charlie" />

			<Greeting name="Diana" />
			<Greeting name="Edward" />
			<Greeting name="Fiona" />
		</div>
	);
}

export default Test;
