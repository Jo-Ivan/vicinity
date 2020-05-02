import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import RentalDetail from '../pages/RentalDetail';
import Host from '../pages/Host';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<Route path="/signup" component={Signup} />
			<Route path="/rentals/:id" component={RentalDetail} />
			<Route path="/host" component={Host} />
		</Switch>
	);
};

export default Routes;
