import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import ProductSelection from "./components/productSelection/ProductSelection";
import Builder from "./components/builder/Builder";
import Submission from "./components/submission/Submission";
import Sidebar from "./components/common/Sidebar";
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";

class App extends Component {
	state = {};

	componentDidMount() {
		let defaultPath = window.location.pathname;
		defaultPath = defaultPath.replace(/\//g, "");
		this.setState({
			base_url: `/${defaultPath}`
		});
	}

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Nav />

					<BrowserRouter>
						<main>
							<Sidebar />

							<Switch>
								<Route exact path="/" component={ProductSelection} />
								<Route exact path="/build/:product" component={Builder} />
								<Route exact path="/build-preview/:id" component={Submission} />
							</Switch>
						</main>
					</BrowserRouter>
					<Footer />
				</div>
			</Provider>
		);
	}
}

export default App;
