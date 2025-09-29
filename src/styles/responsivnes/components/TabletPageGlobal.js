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
  height: 100%;
  gap: 1vw;
  overflow: hidden;
  justify-content: space-between;
//   padding-top: 3vh;
  padding: 3vh 1vw;
`;

export const Right = styled.div`
  flex: 1;
  padding: 1vw;
  overflow: hidden;
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 1vw;
  justify-content: space-between;
  padding-top: 3vh;
`;

export const FloatingAddBtn = styled.button`
  position: fixed;
  top: 3vw;
  right: 4vw;
  width: 7vw;
  height: 7vw;
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

// export const PageContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
// `;
// export const LeftSection = styled.div`
//   padding-top: 3vh;

//   @media screen and (min-width: 1025px) {
//     padding-top: initial;
//   }
// `;

// export const RightSection = styled.div`
//   padding-top: 3vh;

//   @media screen and (min-width: 1025px) {
//     padding-top: initial;
//   }
// `;

// export const ResponsiveHeading = styled.h1`
//   font-size: 1.2rem;

//   @media screen and (min-width: 1025px) {
//     font-size: initial;
//   }
// `;

// export const FloatingAddButton = styled.button`
//   width: 7vw;
//   height: 7vw;
//   font-size: 4vw;
//   margin-right: 0.5vw;
//   margin-top: 3vh;

//   @media screen and (min-width: 1025px) {
//     width: initial;
//     height: initial;
//     font-size: initial;
//     margin-right: initial;
//     margin-top: initial;
//   }
// `;