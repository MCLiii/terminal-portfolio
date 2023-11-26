import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Mingcan Li</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a full-stack developer</HighlightAlt> based in Madison, Wisconsin
      </p>
      <p>
        I am passionate about writing codes and developing applications<br/>
        to solve real-life challenges or just for fun :)
      </p>
    </AboutWrapper>
  );
};

export default About;
