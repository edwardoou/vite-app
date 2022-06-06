import { useParams } from "react-router-dom";

const About = () => {
  const { slug } = useParams();
  return (
    <div>
      <h1>About edit for me</h1>
      <p>This is the about page {slug}</p>
    </div>
  );
};

export default About;
