import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  img1,
  img2,
  arrow1,
  arrow2,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={img1} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description} </span>
          <br></br>
          {arrow1}
          {arrow2}
        </div>
        <img src={img2} />
      </div>
    </Col>
  );
};
