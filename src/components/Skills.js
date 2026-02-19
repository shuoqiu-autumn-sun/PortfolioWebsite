import CAD from "../assets/img/s_CAD.png";
import PCB from "../assets/img/s_PCB.png";
import Prototyping from "../assets/img/s_Prototyping.png";
import Programming from "../assets/img/s_Programming.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import skillsBG from "../assets/img/Skills_BG.png"

export const Skills = () => {
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Studying Mechatronics Engineering allows me to explore a wide range of skills,<br></br>from 3D CAD and prototyping to programming and electronics.<br></br> These are some of the technical skills I’ve developed through hands-on projects.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={CAD} alt="Image" />
                                <h5>CAD</h5>
                            </div>
                            <div className="item">
                                <img src={Prototyping} alt="Image" />
                                <h5>Prototyping</h5>
                            </div>
                            <div className="item">
                                <img src={PCB} alt="Image" />
                                <h5>PCB Design</h5>
                            </div>
                            <div className="item">
                                <img src={Programming} alt="Image" />
                                <h5>Programming</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={skillsBG} alt="Image" />
    </section>
  )
}
