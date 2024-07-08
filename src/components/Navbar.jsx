import React from 'react'
import { Link } from "react-router-dom";
import { appLinks } from "./Links";
import Logo from "../images/benLogo.png"


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <Link to={appLinks?.Home} className="navbar-brand ms-0">
        <img src={Logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link className="nav-link" to={appLinks?.Userprofile}>
              benedict omondi
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={appLinks?.CreatePost}>
              create post
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={appLinks?.Author}>
              Authors
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to={appLinks?.Logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar