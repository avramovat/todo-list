import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  margin: 0 auto;
  padding: 1.95vw;
  border-radius: 1.17vw;
  width: 29.3vw;
  position: relative;
  max-width: 80%;
  margin-top: 4vw;
  font-size: 1.5vw;
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: 0.98vw;
  right: 1.46vw;
  float: right;
  font-size: 2.15vw;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const Heading = styled.h3`
  font-size: 2.5vw;
  color: white;
  text-align: center;
  text-shadow: 0 0 5px #eeaeca, 0 0 10px #e87db8, 0 0 10px rgb(83, 66, 193);
  font-weight: bold;
`;

export const SaveTaskButton = styled.button`
  background-color: rgb(83, 66, 193);
  color: white;
  padding: 1.5vw 2vw;
  border: none;
  border-radius: 1vw;
  font-size: 1.5vw;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  width: 100%;
  margin-top: 0.98vw;

  &:hover {
    transform: rotateY(0deg) rotateX(0deg) scale(1.02);
    box-shadow: 15px 15px 30px rgb(83, 66, 193);
  }
`;
