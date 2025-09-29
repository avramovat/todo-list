import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh; 
  overflow: hidden;
  align-items: stretch; 
  padding: 0 1.5vw;
`;

export const Left = styled.div`
  flex: 1;
  padding: 0.5vw;
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  height: 100%;
  justify-content: space-between;
  padding-top: 3vh;
  overflow: hidden;
`;

export const Right = styled.div`
  flex: 1;
  padding: 0.5vw;
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  height: 100%;
  justify-content: space-between;
  padding-top: 3vh;
  overflow: hidden;
`;

export const FloatingAddBtn = styled.button`
  position: fixed;
  top: 3vw;
  right: 4vw;
  width: 7vw;
  height: 7vw;
  max-width: 50px;
  max-height: 50px;
  font-size: 4vw;
  margin-right: 0.5vw;
  margin-top: 3vh;
  border-radius: 50%;
  background-color: rgb(83, 66, 193);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 0.39vw 0.39vw rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  &:hover {
    transform: rotateY(0deg) rotateX(0deg) scale(1.02);
    box-shadow: 15px 15px 30px rgb(83, 66, 193);
  }
`;


  

