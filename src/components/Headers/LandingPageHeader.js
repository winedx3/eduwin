import React from "react";
import BannerImage from "../../assets/img/sections/tutor-header.jpg";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + BannerImage + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
              <h1 className="title">EduWin</h1>
              <h3 className="description">
                Learn Better, Achieve More, EduWin Together!
              </h3>
              <br />
              <Button
                className="btn-round btn-neutral btn-lg mr-1"
                role="menuitem"
                href="/eduwin#services"
              >
                <i className="fa fa-graduation-cap" /> Tutoring Services
              </Button>
              <Button
                className="btn-round btn btn-danger btn-lg"
                role="menuitem"
                href="/eduwin#contact"
              >
                Sign Up Now
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
