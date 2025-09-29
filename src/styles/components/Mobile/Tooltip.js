import styled from "styled-components";

export const Tooltip = styled.div`
  position: fixed;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.85);
  color: white;
  padding: 0.6vw 1vw;
  border-radius: 0.6vw;
  font-size: 2vw;
  width: 30vw;
  white-space: pre-line;
  display: none;
  pointer-events: none;
`;