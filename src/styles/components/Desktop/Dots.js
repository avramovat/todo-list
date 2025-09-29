import styled from "styled-components";

export const Dot = styled.div`
  width: 0.8vw;
  height: 0.8vw;
  border-radius: 50%;
  display: inline-block;
  background-color: red;
  margin: 0.2vw;
  cursor: pointer;
`;

export const DotContainer = styled.div`
  position: absolute;
  bottom: 0.7vw;
  left: 0.49vw;
  display: flex;
  gap: 0.39vw;
  flex-wrap: wrap;
  max-height: 2.93vw;
  scrollbar-width: none;
  padding-right: 0.2vw;
  margin-left: 0.5vw;
`;

export const DotIndicator = styled.div`
  position: relative;
  width: 0.8vw;
  height: 0.8vw;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.39vw;
  cursor: pointer;
  z-index: 1001;
  margin-top: 0.5vw;
`;

export const DotMore = styled.div`
  margin-top: 0.2vw;
`;

export const HighlightHigh = styled.div`
  background-color: #f87171;
`;

export const HighlightMedium = styled.div`
  background-color: darkkhaki;
`;

export const HighlightLow = styled.div`
  background-color: #90ee90;
`;