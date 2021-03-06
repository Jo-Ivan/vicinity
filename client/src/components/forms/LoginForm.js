import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { login } from "../../actions/authActions";

const LoginForm = ({ login, isAuthenticated }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async ({ email, password }) => {
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="column is-4 ">
      <section className="section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-right">
              <input className="input" type="email" name="email" ref={register({ required: true, pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i } })} />
              {errors.email && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.email.type === "required" && "Email is required."}
                  {errors.email.type === "pattern" && "Email is not valid."}
                </span>
              )}
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon="user" />
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Password</label>
            <div className="control has-icons-right">
              <input className="input" type="password" name="password" ref={register({ required: true, minLength: 8 })} />
              {errors.password && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.password.type === "required" && "Password is required."}
                  {errors.password.type === "minLength" && "Password must be at least 8 characters."}
                </span>
              )}
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon="key" />
              </span>
            </div>
          </div>

          <div className="has-text-centered">
            <button className="button is-vcentered is-primary">Login</button>
          </div>
        </form>

        <div className="has-text-centered">
          <Link to="/signup"> Don't you have an account? Sign up now!</Link>
        </div>
      </section>
    </div>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(LoginForm);
