import "./app.css";

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				{/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
				<SkillList />
			</div>
		</div>
	);
}

function Avatar() {
	return <img className="avatar" src="profile_image.png" alt="Profile" />;
}

function Intro() {
	return (
		<div>
			<h1>Mayuresh Surve</h1>
			<p>
				Software Engineer with 2+ years of experience and a Master's in
				Computer Science. Developed B2B SaaS products. When not coding,
				I like to listen to music and cook.
			</p>
		</div>
	);
}

function SkillList() {
	return (
		<div className="skill-list">
			<Skill name="JavaScript" emoji="👾" color="#f0d71d"/>
			<Skill name="Python" emoji="🐍" color="#6b6ff2"/>
			<Skill name="HTML+CSS" emoji="🕸️" color="#ed7155"/>
			<Skill name="JAVA" emoji="☕️" color="#eb9526"/>
			<Skill name="AWS" emoji="☁️" color="#72e3f7"/>
			<Skill name="NodeJS" emoji="📈" color="#68e39e"/>
			<Skill name="Git and GitHub" emoji="🧑‍💻" color="#f0d989"/>
		</div>
	);
}

function Skill(props) {
	return (
		<div className="skill" style={{ backgroundColor: props.color }}>
			<span>{props.name}</span>
			<span>{props.emoji}</span>
		</div>
	);
}

export default App;
