// import logo from './logo.svg';
// import './App.css';
// import Homepage from './Components/Homepage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Homepage />
//     </div>
//   );
// }

// export default App;


import React from "react";
import './App.css';
class App extends React.Component
{

	// Constructor
	constructor(props) 
  {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount()
  {
		fetch("https://hp-api.herokuapp.com/api/characters")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render()
  {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Harry Potter Data </h1> {
				items.map((item) => (
				<ol key = { item.id } >
					Character Name: { item.name },
					House Name: { item.house },
          Birthday: { item.dateOfBirth },
					Blood status: { item.ancestry }
					</ol>
				))
			}
		</div>
	  );
  }
}

export default App;
