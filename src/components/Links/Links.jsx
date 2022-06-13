import React, { memo } from "react";
import { Link } from "react-router-dom";

const Links = memo(() => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/sign-in"}>
          INICIO
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/Home"}>
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>
                INICIAR
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
                REGISTRO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Links;
