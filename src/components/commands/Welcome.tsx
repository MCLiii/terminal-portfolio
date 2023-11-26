import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
  __  __ _                               _      _ 
 |  \\/  (_)                             | |    (_)
 | \\  / |_ _ __   __ _  ___ __ _ _ __   | |     _ 
 | |\\/| | | '_ \\ / _\` |/ __/ _\` | '_ \\  | |    | |
 | |  | | | | | | (_| | (_| (_| | | | | | |____| |
 |_|  |_|_|_| |_|\\__, |\\___\\__,_|_| |_| |______|_|
                  __/ |                           
                 |___/                                                        
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
  |\\/| o  _   _   _  _   _  
  |  | | | | (_| (_ (_| | | 
  |  o        _|            
  |_ |                      
`}
          </PreNameMobile>
        </PreWrapper>
        <div><p>Hey! Welcome to my terminal portfolio! (Version 1.3.2)</p></div>
        <Seperator>----</Seperator>
        <p>About me:</p>
        <br/>
        <p>
        Hi, I'm Mingcan, a passionate full stack developer, <br/>
        I'm currently pursuing a degree in computer science and math at UW-Madison. <br/>
        I love making computers go brrrr..
        </p>
        <Seperator>----</Seperator>
        <div>
          <p>Quick Social Links:</p>
          <br/>
          <Link href={"https://www.linkedin.com/in/mingcanli/"}>Linkedin</Link>
          <br/>
          <Link href={"https://github.com/MCLiii"}>Github</Link>
          <br/>
          <Link href={"https://instagram.com/mcli_null"}>Instagram</Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
