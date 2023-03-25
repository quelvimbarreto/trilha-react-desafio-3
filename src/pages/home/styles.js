import styled from "styled-components";

export const Wraper = styled.div`
  width: 100%;
  height: 517px;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.1)
    ),
    url("banner-play.png");
  background-size: cover;
  background-position: center;
`;

export const Container = styled.main`
  width: 70%;
  padding: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  width: 600px;
  margin-bottom: 2rem;
  line-height: 65px;
  color: #ffffff;
`;

export const TitleHighlight = styled.span`
  background-image: linear-gradient(to right, #6b42cd, #ff158b, #ff1548);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  font-weight: 900;
`;

export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  width: 600px;
  margin-bottom: 2rem;
  color: #ffffff;
`;
