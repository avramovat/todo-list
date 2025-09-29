import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh; 
  overflow: hidden;
  align-items: stretch; 
`;

export const Left = styled.div`
  flex: 1;
  padding: 1vw;
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  display: flex;
  flex-direction: column;
  gap: 1vw;
  height: 100%;
  overflow: hidden;
  justify-content: space-between;
`;

export const Right = styled.div`
  flex: 1;
  padding: 1vw;
  overflow: hidden;
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  display: flex;
  flex-direction: column;
  gap: 1vw;
  height: 100%;
  justify-content: space-between;
`;

export const FloatingAddBtn = styled.button`
  position: fixed;
  top: 3vw;
  right: 4vw;
  width: 6vw;
  height: 6vw;
  font-size: 3.13vw;
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
