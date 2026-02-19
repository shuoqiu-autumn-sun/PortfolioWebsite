import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/fullHeadShot.jpg";
import { EnvelopeFill, Linkedin, Github } from "react-bootstrap-icons";

export const Contact = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="contact" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="contact-bx wow zoomIn">
                        <h2>Contact Information</h2>
                        <Container>
                              <div className="contact-bx wow zoomIn"></div>
                              <Row className="align-items-center">
                                {/* Left: Picture */}
                                <Col md={6} className="text-start">
                                  <img src={contactImg} alt="Autumn Sun" className="contact-image" />
                                </Col>
                                {/* Right: Contact Links */}
                                <Col md={6} className="contact-links">
                                <p>Let’s connect! I am always happy to chat :D</p>
                                  <p><EnvelopeFill />{" "}<a href="mailto:shuoqiu.autumn.sun@gmail.com"> Email: shuoqiu.autumn.sun@gmail.com </a></p>
                                  
                                  <p><Linkedin />{" "}<a
                                      href="https://www.linkedin.com/in/shuoqiu-autumn-sun"
                                      target="_blank"
                                      rel="noopener noreferrer"> LinkedIn: linkedin.com/in/shuoqiu-autumn-sun</a></p>

                                  <p>
                                    <Github />{" "}
                                    <a
                                      href="https://github.com/shuoqiu-autumn-sun"
                                      target="_blank"
                                      rel="noopener noreferrer">
                                      GitHub: github.com/shuoqiu-autumn-sun </a>
                                  </p>
                                </Col>
                              </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

/*
export const Contact = () => (
  <section className="contact" id="contact">

    {/* Floating white header like Skills }
    <div className="contact-title-wrapper">
      <h2 className="contact-title">Contact</h2>
    </div>

    

  </section>
);
*/