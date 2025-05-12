import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionTestimonials() {
  return (
    <>
      <div
        className="section section-testimonials cd-section"
        id="testimonials"
      >
        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/uriel-soberanes.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Our Clients Love Us</h2>
                <h5 className="description">
                  You need more information? Check what other persons are saying
                  about our product. They are very happy with their purchase.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-icon">
                    <i className="fa fa-quote-right" />
                  </div>
                  <CardBody>
                    <p className="card-description">
                      Your products, all the kits that I have downloaded from
                      your site and worked with are sooo cool! I love the color
                      mixtures, cards... everything. Keep up the great work!
                    </p>
                    <CardFooter>
                      <CardTitle tag="h4">Alec Thompson</CardTitle>
                      <h6 className="card-category">@alecthompson</h6>
                      <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-icon">
                    <i className="fa fa-quote-right" />
                  </div>
                  <CardBody>
                    <p className="card-description">
                      "Don't be scared of the truth because we need to restart
                      the human foundation in truth. That's why I love you like
                      Kanye loves Kanye I love Rick Owens’ bed design but the
                      back is not so attractive"
                    </p>
                    <CardFooter>
                      <CardTitle tag="h4">Gina Andrew</CardTitle>
                      <h6 className="card-category">@ginaandrew</h6>
                      <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/joe-gardner-2.jpg")}
                          />
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-icon">
                    <i className="fa fa-quote-right" />
                  </div>
                  <CardBody>
                    <p className="card-description">
                      "Your products, all the kits that I have downloaded from
                      your site and worked with are sooo cool! I love the color
                      mixtures, cards... everything. Keep up the great work!"
                    </p>
                    <CardFooter>
                      <CardTitle tag="h4">Joe West</CardTitle>
                      <h6 className="card-category">@georgewest</h6>
                      <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionTestimonials;
