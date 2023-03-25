import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import Jobs from "../../components/Jobs/Jobs";

import {
  Wraper,
  Container,
  Title,
  TitleHighlight,
  TextContent,
} from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Wraper>
        <Container>
          <div>
            <Title>
              <TitleHighlight>
                Implemente <br />
              </TitleHighlight>
              o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do
              mundo e encare seu novo desafio profissional, evoluindo em
              comunidade com os melhores experts.
            </TextContent>
            <Button
              title="COMEÇAR AGORA"
              variant="secondary"
              onClick={handleClickSignIn}
            />
          </div>
        </Container>
        <Jobs />
      </Wraper>
    </>
  );
};

export { Home };
