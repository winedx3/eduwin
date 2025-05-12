import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionBlog() {
  return (
    <>
      <div className="section secion-blog cd-section" id="blogs">
        {/* ********* BLOGS 3 ********* */}
        <div className="blog-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">Latest Blogposts (TODO fetch from edwinweilun.wordpress.com)</h2>
                <br />
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="4">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img"
                          src={require("assets/img/sections/jeff-sheldon.jpg")}
                        />
                      </div>
                    </Col>
                    <Col md="8">
                      <CardBody>
                        <h6 className="card-category text-info">Enterprise</h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            SoundCloud says it’s going to survive, but how?
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          No matter what happens — funding versus acquisition
                          versus who knows what — Ljung says SoundCloud is not
                          going away “anytime in the foreseeable future.” I hope
                          that’s true, but I can’t help but feel a bit
                          skeptical. — and…{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <b>Megan Rose Dickey</b>
                          </a>
                          , 11 days ago
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="8">
                      <CardBody>
                        <h6 className="card-category text-danger">
                          <i className="fa fa-free-code-camp mr-1" />
                          Trending
                        </h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Uber acqui-hires social app studio Swipe Labs
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          These issues might be making it a bit harder for Uber
                          to hire right now in the competitive Silicon Valley
                          job market. Acqui-hiring companies like it’s doing
                          here with Swipe Labs lets it roll up a bunch of good
                          talent — and…{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <b>Josh Constine</b>
                          </a>
                          , 2 days ago
                        </p>
                      </CardBody>
                    </Col>
                    <Col md="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/sections/rawpixel-comm.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="4">
                      <div className="card-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={require("assets/img/sections/jeremy-yap.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col md="8">
                      <CardBody>
                        <h6 className="card-category text-success">Startups</h6>
                        <CardTitle tag="h3">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            HBO and Netflix lead this year’s nominations
                          </a>
                        </CardTitle>
                        <p className="card-description">
                          Streaming services once again top the list of this
                          year’s Emmy nominations – another indicator of the
                          shift in how today’s consumers are watching TV. HBO,
                          which has been available.{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Read More
                          </a>
                        </p>
                        <p className="author">
                          by{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            <b>Sarah Perez</b>
                          </a>
                          , 14 Jul 2020
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionBlog;
