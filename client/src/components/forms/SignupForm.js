import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { compare } from "../../helpers/validators";

import { signup } from "../../actions/authActions";

const SignupForm = ({ signup, isAuthenticated }) => {
  const { register, handleSubmit, errors, getValues } = useForm();

  const onSubmit = ({ username, email, password, passwordConfirmation }) => {
    signup(username, email, password, passwordConfirmation);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="column is-4 ">
      <section className="section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control has-icons-right">
              <input className="input" type="text" name="username" ref={register({ required: true })} />
              {errors.username && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.username.type === "required" && "Username is required."}
                </span>
              )}
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon="user" />
              </span>
            </div>
          </div>

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
                <FontAwesomeIcon icon="envelope" />
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

          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control has-icons-right">
              <input className="input" type="password" name="passwordConfirmation" ref={register({ required: true, minLength: 8, validate: { compare: compare("password", getValues) } })} />
              {errors.passwordConfirmation && (
                <span className="help is-danger">
                  <FontAwesomeIcon icon="exclamation-triangle" /> {errors.passwordConfirmation.type === "required" && "Password is required."}
                  {errors.passwordConfirmation.type === "minLength" && "Password must be at least 8 characters."}
                  {errors.passwordConfirmation.type === "compare" && "Password doesn't match."}
                </span>
              )}
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon="key" />
              </span>
            </div>
          </div>

          <div className="has-text-centered">
            <button type="submit" className="button is-vcentered is-primary">
              Sign Up
            </button>
          </div>
        </form>

        <div className="has-text-centered">
          <Link to="/login"> Already have an account? Log in now!</Link>
        </div>
      </section>
    </div>
  );
};

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(SignupForm);
