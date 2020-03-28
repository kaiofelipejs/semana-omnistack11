import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Logon} />
				<Route path="/register" component={Register} />
				<Route path="/profile" component={Profile} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
