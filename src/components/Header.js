import React from 'react'

const Header = () => {
  const [isActive, setisActive] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <strong class="is-size-4">vicinity</strong>
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
          {/* <div class="field has-addons">
            <div class="control">
              <input class="input" type="text" placeholder="Search" />
            </div>
            <div class="control">
              <a class="button is-primary">Search</a>
            </div>
          </div> */}
        </div>
        <div className="navbar-end is-size-8">
          <a className="navbar-item">Home</a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>

            </div>
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">Sign up</a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </nav >
  )
}

export default Header;