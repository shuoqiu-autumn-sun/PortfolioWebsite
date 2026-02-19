import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, pdfLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* ========================
          Added <a> wrapper to link to the PDF
      ======================== */}
      <a 
        href={pdfLink}        // link to your PDF
        target="_blank"       // open in a new tab
        rel="noreferrer"      // security best practice
        style={{ textDecoration: "none", color: "inherit" }} // keep card styles
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}