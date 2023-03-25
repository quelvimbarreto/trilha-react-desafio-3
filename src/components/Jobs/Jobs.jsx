import React from "react";
import styled from "styled-components";
import { Button } from "../Button";
import "../../assets/swiper.min.css";

const Container = styled.div`
  width: 100%;
`;

const Wraper = styled.div`
  width: 65%;
  border-radius: 8px;
  margin: 0 auto;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
  width: 45%;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 55px;
  text-align: center;
  line-height: 25px;
`;

const Description = styled.p`
  width: 80%;
  text-align: center;
  line-height: 25px;
`;

const Card = styled.div`
  margin-top: 20px;
  background: linear-gradient(
    45deg,
    rgba(139, 90, 255, 1),
    rgba(255, 21, 139, 1)
  );
  border-radius: 8px;
`;

const CardInfo = styled.div`
  flex: 1;
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  height: 560px;
  background-color: #161221;
  border-radius: 8px;
  transition: all ease 0.25s;
  transform: translate(-4px, -4px);

  &:hover {
    transform: translate(-8px, -8px);
  }
`;

const CardTitle = styled.h2`
  width: 75%;
  font-size: 40px;
  font-weight: 400;
`;

const CardTitleStrong = styled.span`
  background-image: linear-gradient(to right, #6b42cd, #ff158b, #ff1548);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  font-weight: 900;
`;

const Jobs = () => {
  return (
    <Container>
      <Text>
        <Title>
          Explore nossas <CardTitleStrong>carreiras</CardTitleStrong>
        </Title>
        <Description>
          Desbloqueie o seu próximo nível de conhecimento e seja contratado
          pelas maiores empresas de tecnologia do país
        </Description>
      </Text>

      <Wraper>
        <swiper-container
          slides-Per-View={"auto"}
          navigation="true"
          loop={true}
          rewind={true}
          space-between={20}
          breakpoints={{
            500: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          <swiper-slide>
            <Card>
              <CardInfo>
                <CardTitle>Carreira Back-end</CardTitle>
                <p>Formação Google Cloud Platform (GCP) Specialist</p>
                <Button title={"Ver carreira"} variant="tertiary">
                  Ver carreira
                </Button>
              </CardInfo>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card>
              <CardInfo>
                <CardTitle>Carreira Front-end</CardTitle>
                <p>Formação Google Cloud Platform (GCP) Specialist</p>
                <Button title={"Ver carreira"} variant="tertiary">
                  Ver carreira
                </Button>
              </CardInfo>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card>
              <CardInfo>
                <CardTitle>Carreira Mobile</CardTitle>
                <p>Formação Google Cloud Platform (GCP) Specialist</p>
                <Button title={"Ver carreira"} variant="tertiary">
                  Ver carreira
                </Button>
              </CardInfo>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card>
              <CardInfo>
                <CardTitle>Carreira Infra, DevOps & Security</CardTitle>
                <p>Formação Google Cloud Platform (GCP) Specialist</p>
                <Button title={"Ver carreira"} variant="tertiary">
                  Ver carreira
                </Button>
              </CardInfo>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card>
              <CardInfo>
                <CardTitle>Carreira Cloud</CardTitle>
                <p>Formação Google Cloud Platform (GCP) Specialist</p>
                <Button title={"Ver carreira"} variant="tertiary">
                  Ver carreira
                </Button>
              </CardInfo>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card>
              <CardInfo>
                <CardTitle>Carreira Data & Analytics</CardTitle>
                <p>Formação Google Cloud Platform (GCP) Specialist</p>
                <Button title={"Ver carreira"} variant="tertiary">
                  Ver carreira
                </Button>
              </CardInfo>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card>
              <CardInfo>
                <CardTitle>Carreira Games</CardTitle>
                <p>Formação Google Cloud Platform (GCP) Specialist</p>
                <Button title={"Ver carreira"} variant="tertiary">
                  Ver carreira
                </Button>
              </CardInfo>
            </Card>
          </swiper-slide>
          <swiper-slide>
            <Card>
              <CardInfo>
                <CardTitle>Carreira Qualidade de Software</CardTitle>
                <p>Formação Google Cloud Platform (GCP) Specialist</p>
                <Button title={"Ver carreira"} variant="tertiary">
                  Ver carreira
                </Button>
              </CardInfo>
            </Card>
          </swiper-slide>
        </swiper-container>
      </Wraper>
    </Container>
  );
};

export default Jobs;
