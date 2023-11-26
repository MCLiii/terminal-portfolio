import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.S Computer Science, Mathematics with Entrepreneurship minor",
    desc: "Univesity of Wisconsin-Madison | 2021 - 2025",
  },
  {
    title: "International Baccalaureate",
    desc: "Guangdong Country Garden School | 2019 - 2021",
  }
];

export default Education;
