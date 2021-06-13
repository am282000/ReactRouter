import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Service from './Service';

const App = () => {
	const Name = () => {
		return <h1>Madaan Sahaab</h1>;
	};

	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={About} />
				<Route
					exact
					path="/service"
					component={() => <Service name="Service" />}
				/>
				<Route
					exact
					path="/contact"
					render={() => <Contact name="Contact" />}
				/>
				<Route path="/contact/name" component={Name} />
				<Route component={Error} />
			</Switch>

			{/* <About />
            <Contact /> */}
		</>
	);
};

export default App;

// component vs render
// In Component  => Already vale component ko hta k dubara usi component ko call krega
//                     #new call every time
// In Render  => Already vale component ko hta ki bjaaye use update krne ki kosish krega #jo jo chage hua hoga
//                     #call for only updated value ..if nothing updated return already vala component

// If we want dont want to pass props than we use component {About} directly

// https://www.freecodecamp.org/news/react-router-in-5-minutes/
