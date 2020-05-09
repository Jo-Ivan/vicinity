import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const GuestRoute = ({ component: Component, auth: { isAuthenticated, loading }, ...rest }) => <Route {...rest} render={(props) => (!isAuthenticated && !loading ? <Component {...props} /> : <Redirect to="/" />)} />;

GuestRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(GuestRoute);
