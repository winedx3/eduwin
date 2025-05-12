/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer footer-black footer-white">
        <Container>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a
                    href="https://edwinweilun.wordpress.com/"
                    target="_blank"
                    className="mr-1"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <span className="copyright">
                © {new Date().getFullYear()}
                , EduWin
              </span>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
