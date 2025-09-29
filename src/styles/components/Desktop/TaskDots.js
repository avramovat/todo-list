import styled from "styled-components";

export const DotContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center; 
  bottom: 1vh;
  gap: 0.39vw;
  flex-wrap: nowrap;
  max-height: 2.93vw;
  scrollbar-width: none;
  padding-right: 0.2vw;
  margin-left: 0.5vw;
`;

export const Dot = styled.div`
  position: relative;
  width: 0.8vw;
  height: 0.8vw;
  border-radius: 50%;
  display: block;
  margin-right: 0.39vw;
  cursor: pointer;
  z-index: 1001;
  margin: 0;
`;

export const Tooltip = styled.div`
  position: fixed;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 0.6vw 1vw;
  border-radius: 0.6vw;
  font-size: 0.95vw;
  max-width: 20vw;
  white-space: pre-line;
  display: none;
  pointer-events: none;
`;
