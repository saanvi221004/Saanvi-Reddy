import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import one from "../assets/img/one.jpg";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";
import four from "../assets/img/four.png";
import five from "../assets/img/five.png";
import six from "../assets/img/six.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Flashcards App",
      description: "Design & Development",
      imgUrl: one,
    },
    {
      title: "Lepre Tracker",
      description: "A carbon footprint tracker",
      imgUrl: two,
    },
    {
      title: "Harmony",
      description: "A virtual musical instrument",
      imgUrl: three,
    },
    {
      title: "Unigine Squad",
      description: "A gaming website",
      imgUrl: four,
    },
    {
      title: "To-do List",
      description: "Design & Development",
      imgUrl: five,
    },
    {
      title: "Calculator",
      description: "Basic Java Program",
      imgUrl: six,
    },
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
                <p>Eager to make an impact, I continuously explore new design trends and front-end technologies. My goal is to bridge the gap between aesthetics and usability, crafting seamless and user-friendly interfaces.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Innovation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Passion</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Driven by innovation, I stay updated with the latest design trends and front-end technologies to create seamless, responsive, and user-friendly solutions. My goal is to transform ideas into meaningful digital interactions that enhance usability and leave a lasting impact.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Passionate about innovation, I constantly explore new design trends and technologies to craft engaging, responsive, and accessible solutions. My goal is to bridge aesthetics with usability, ensuring every interaction feels intuitive and impactful.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
