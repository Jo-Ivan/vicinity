import React from 'react';
import './Header.scss';

const Header = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <strong className="is-size-4">vicinity</strong>
        </a>

        <a onClick={() => {
          setisActive(!isActive);
        }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-main">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-main"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="text" placeholder="Find a rental" />
              </div>
              <div className="control">
                <button className="button is-light"
                  type="submit"><span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ddd" d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z" /></svg>
                  </span></button>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-end is-size-8">
          <a className="navbar-item">Host your home</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Manage</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>

          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">Sign up</a>
              <a className="button is-light">Log in</a>
            </div>
          </div>

        </div>
      </div>

    </nav >
  )
}

export default Header;