import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #151515;
  color: #fef7e5;
  position: relative;
`;

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 92px;
  }
`;

export const Left = styled.div`
  display: flex;
`;
export const Right = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 59px);
  top: 59px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #151515;
  gap: 25px;
  z-index: 1000;
  overflow: hidden;

  @media screen and (min-width: 768px) {
  }
`;

export const BuscarInputContainer = styled.div`
  width: 275px;
  height: 30px;
  background: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;
  display: flex;
`;

export const Menu = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuRight = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #e4105d;
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #ffffff;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #ffffff;
`;
