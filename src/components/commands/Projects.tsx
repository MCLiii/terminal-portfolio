import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Algotrader",
    desc: "An algorithmic trading platform currently under development, the goad is to have an all in one platform that can do backtest, trade with strategy and portfolio risk management",
    url: "https://github.com/MCLiii/ALGOTrader",
  },
  {
    id: 2,
    title: "Treasure Hunt Bot",
    desc: "A stm32 and raspberry based computer vision robot that reads treasure maze map and navigate the maze to find the treasure in shortest path",
    url: "https://github.com/MCLiii",
  },
  {
    id: 3,
    title: "Face Tracking Drone",
    desc: "A drone remote control system built for Tello, allowing the drone to automatically follow the face in frame",
    url: "https://github.com/MCLiii/TelloFaceTracking/",
  },
  {
    id: 4,
    title: "Neural Network Activation Function Research",
    desc: "An independent research into the most effective activation function for DNN in numerous applications",
    url: "https://github.com/MCLiii/NeuralNetworkTesting/",
  },
];

export default Projects;
