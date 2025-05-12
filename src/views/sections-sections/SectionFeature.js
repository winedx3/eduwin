import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionHeader() {
  return (
    <>
      <div className="section section-feature cd-section" id="features">
        {/* ********* FEATURES 1 ********* */}
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Subjects Offered</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-palette" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Mathematics</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">English</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-danger">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Science</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button
                      className="btn-link"
                      color="danger"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default SectionHeader;
