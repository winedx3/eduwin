import React from "react";

// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionHeader() {
  return (
    <>
      <div className="section section-header cd-section" id="headers">
        <div className="header-3">
          <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
              <NavbarBrand className="mb-0" href="www.creative-tim.com">
                EduWin Academy
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarSupportedContent3"
                type="button"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarSupportedContent3">
                <Nav className="ml-auto" navbar>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="https://www.facebook.com/profile.php?id=61570094852962"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <div className="page-carousel">
            <div className="filter"/>
            <div
              className="page-header"
              style={{backgroundImage: "url(" + require("assets/img/sections/section-header-1.jpg") + ")"}}
            >
              <div className="filter"/>
              <div className="content-center">
                <Container>
                  <Row>
                    <Col className="text-left" md="6">
                      <h1 className="title">EduWin Academy</h1>
                      <h5>
                        Eduwin Academy is dedicated to providing top-quality tutoring services in Singapore Syllabus
                        Mathematics and IGCSE Math. Our tailored approach aims to enhance learning experiences and academic
                        achievements for all students. Join us in your educational journey and let's succeed together.
                      </h5>
                      <br/>
                      <div className="buttons">
                        <Button
                          className="btn-round btn-neutral btn-lg mr-1"
                          role="menuitem"
                          href="/eduwin#features"
                        >
                          <i className="fa fa-graduation-cap" /> Tutoring Services
                        </Button>
                        <Button
                          className="btn-round btn btn-danger btn-lg"
                          role="menuitem"
                          href="/eduwin#contact-us"
                        >
                          Sign Up Now
                        </Button>
                        <Button
                          className="btn-neutral btn-just-icon"
                          color="link"
                          href="https://www.facebook.com/profile.php?id=61570094852962"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa fa-facebook-square"/>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;
