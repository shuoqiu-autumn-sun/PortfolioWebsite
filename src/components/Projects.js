import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import SBC from "../assets/img/p_int_SBC.jpg";
import Dispenser from "../assets/img/p_int_Dispenser.jpg";
import FlyAway from "../assets/img/p_mech_FlyAway.png";
import STM32 from "../assets/img/p_elec_STM32.png";

/*import colorSharp2 from "../assets/img/color-sharp2.png";*/
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // ========================
  // Added pdfLink property for each project
  // ========================
  const integratedProjects = [
    {
      title: "Self-Balancing-Car",
      description: "Design & Development",
      imgUrl: SBC,
      pdfLink: "https://drive.google.com/file/d/1MZeizbA1FUlg0yyxw8mMjRZy7h23uNA9/view?usp=sharing" // replace with your link
    },
    {
      title: "Automated Medicine Dispenser",
      description: "Design & Development",
      imgUrl: Dispenser,
      pdfLink: "https://drive.google.com/file/d/1e8qouIl-8MBnffIzAqf4by8FzWnozfAD/view?usp=sharing"
    }
  ];

  const mechanicalProjects = [
    {
      title: "Fly Away",
      description: "Design & Development",
      imgUrl: FlyAway,
      pdfLink: "https://drive.google.com/file/d/1xXazAqK6pql_Fg3gMd1qoPGPkdlSxseF/view?usp=sharing"
    }
  ];

  const electricalProjects = [
    {
      title: "Custom STM32 Board",
      description: "Design & Development",
      imgUrl: STM32,
      pdfLink: "https://drive.google.com/file/d/19vRxLAOZLosynla7FLLBhjjHPAgdbxXo/view?usp=sharing"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>
                  These projects showcase my experience working across multiple disciplines, 
                  from programming and circuit design to CAD modeling and prototyping! 
                  I enjoy building systems that bring multiple engineering fields together.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Integrated</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mechanical</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Electrical</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {integratedProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="second">
                      <Row>
                        {mechanicalProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>

                    <Tab.Pane eventKey="third">
                      <Row>
                        {electricalProjects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}