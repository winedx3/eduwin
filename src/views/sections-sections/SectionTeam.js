import React from "react";
import edwinPro from "../../assets/img/faces/edwin-professional.jpg";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionTeam() {
  return (
    <>
      <div className="section section-team cd-section" id="teams">
        {/* ********* TEAM 4 ********* */}
        <div
          className="team-4 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/fabio-mangione.jpg") + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Your Tutor</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your team. Keep you user engaged by providing meaningful
                  information.
                </h5>
                <br />
              </Col>
            </Row>
            <Row>
              <Col md="4"/>
              <Col md="4">
                <Card className="card-profile">
                  <CardBody>
                    <div className="card-avatar">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="Edwin Pang"
                          src={edwinPro}
                        />
                      </a>
                    </div>
                    <CardTitle tag="h4">Edwin Pang Weilun</CardTitle>
                    <p className="card-description text-center">
                      Experienced tutor with 10+ years helping primary and secondary students excel in Maths and Science. Patient, reliable, and results-focused.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon mr-1"
                      href="https://www.linkedin.com/in/edwinweilun/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                    <Button
                      className="btn-just-icon mr-1"
                      color="facebook"
                      href="https://www.facebook.com/profile.php?id=61570094852962"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button
                      className="btn-just-icon"
                      color="instagram"
                      href="https://www.instagram.com/epwl_/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4"/>
            </Row>
          </Container>
        </div>
        {/* ********* END TEAM 4 ********* */}
      </div>
    </>
  );
}

export default SectionTeam;
