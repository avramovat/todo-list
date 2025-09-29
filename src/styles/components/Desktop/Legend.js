import styled, { css } from "styled-components";

export const LegendContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5vw;
  margin-top: 0%.5;
  font-size: 1.2vw;
  overflow: visible;
`;

export const LegendItem = styled.div`
  background: rgba(255, 255, 255, 0.25);
  padding: 0.5vw 1vw;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 0.6vw;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  transition: transform 0.2s ease;
  cursor: pointer;

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
  width: 1vw;
  height: 1vw;
  border-radius: 50%;
  display: inline-block;
`;
