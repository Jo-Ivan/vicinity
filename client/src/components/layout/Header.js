import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/authActions";

import "./Header.scss";

const Header = ({ logout, auth: { isAuthenticated, user, loading } }) => {
  const [isBurgerActive, setisBurgerActive] = React.useState(false);

  const authLinks = (
    <a onClick={logout} className="button is-light" href="#!">
      Log out
    </a>
  );

  const guestLinks = (
    <>
      <Link className="button is-primary" to="/signup">
        Sign up
      </Link>
      <Link className="button is-light" to="/login">
        Log in
      </Link>
    </>
  );

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="vicinity-brand navbar-brand">
        <Link className="navbar-item" to="/">
          <strong className="has-text-primary is-size-4">vicinity</strong>
        </Link>

        <button
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
          className={`navbar-burger burger ${isBurgerActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-main"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbar-main" className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Find a rental" />
              </div>
              <div className="control">
                <button className="button is-light" type="submit">
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="#ddd"
                        d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-end is-size-8">
          {isAuthenticated && <span className="navbar-item">Welcome {user.username}!</span>}
          {isAuthenticated && (
            <Link className="navbar-item" to="/host">
              Host your home
            </Link>
          )}
          {isAuthenticated && (
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">Manage</div>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/">
                  About
                </Link>
                <Link className="navbar-item" to="/">
                  Jobs
                </Link>
                <Link className="navbar-item" to="/">
                  Contact
                </Link>
                <hr className="navbar-divider" />
                <Link className="navbar-item" to="/">
                  Report an issue
                </Link>
              </div>
            </div>
          )}
          <div className="vicinity-navbar-end navbar-item">
            <div className="buttons">{isAuthenticated ? authLinks : guestLinks}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
