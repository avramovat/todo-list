import styled, { css } from "styled-components";

export const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5vw;
  overflow: visible;
  margin-top: 10vh;
  font-size: 3vw;
  padding: 1vw;
`;


export const LegendItem = styled.div`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 0.6vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  transition: transform 0.2s ease;
  cursor: pointer;
  padding: 1vw;

  ${(props) =>
    props.active &&
    css`
      background-color: #f0f0f0;
      box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
      transform: scale(1.1);
      font-weight: bold;
      border: 2px solid rgb(83, 66, 193);
    `}
`;

export const LegendDot = styled.span`
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  display: inline-block;
`;
