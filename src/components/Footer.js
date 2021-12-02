import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer-area">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center">
            <div className="col-12 col-md-6">
              <Link to="">
                <img src="/img/core-img/logo.png" alt="" />
              </Link>
              <p className="copywrite-text">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This website created by{" "}
                <Link to="https://aploscoder.com" target="_blank">
                  Aploscoder
                </Link>{" "}
              </p>
            </div>

            <div className="col-12 col-md-6">
              <div className="footer-nav">
                <ul>
                  <li>
                    <Link to="/">Lilycs</Link>
                  </li>
                  <li>
                    <Link to="/free-mp3">Free-Mp3</Link>
                  </li>
                  <li>
                    <Link to="/bibliograph">Bibliograph</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
