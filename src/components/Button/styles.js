import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #565656;
  border: none;
  border-radius: 20px;
  position: relative;
  font-size: 16px;
  color: #ffffff;
  padding: 5px 24px;
  transition: all 0.5s ease;

  :hover {
    cursor: pointer;
    background-color: #e4105d;
  }

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      min-width: 167px;
      height: 33px;
      font-weight: 700;
      background: #e4105d;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -6px;
        left: -5.5px;
        width: calc(100% + 11px);
        height: calc(100% + 11px);
        border-radius: 20px;
      }

      :hover {
        box-shadow: #e4105d 0px 0px 35px 8px;
      }
    `}
  ${({ variant }) =>
    variant === "tertiary" &&
    css`
      width: 100%;
      font-size: 20px;
      font-weight: 700;
      background: transparent;
      border: 1px solid #e4105d;
      border-radius: 5px;
      padding: 16px;

      :hover {
        background-color: #e4105d;
      }
    `}
`;
