import styled from 'styled-components';

export const MobileHeader = styled.h1`
  font-size: 2vw;
  margin-top: 1vh;
`;

export const MobileButton = styled.button`
  border-radius: 50%;
`;

export const MobileDayNumber = styled.div`
  font-size: 3vw;
  font-weight: normal;
  padding: 1vw;
`;

export const MobileTitle = styled.h2`
  font-size: 4vw;
`;

export const MobileGrid = styled.div`
  margin-top: 2vh;
`;

export const MobileThead = styled.div`
  gap: 1vw;
  font-size: 2vw;
  color: grey;
`;

export const MobileLegend = styled.div`
  margin-top: 10vh;
  font-size: 3vw;
  padding: 1vw;

  span {
    padding: 1vw;
  }
`;

export const MobileDot = styled.div`
  width: 0.5vw;
  height: 0.5vw;
`;

export const MobileControls = styled.div`
  padding: 0 1vw;
  margin-top: -1vh;
`;

export const MobileOptions = styled.div`
  font-size: 2vw;
  border-radius: 4vw;
  padding: 0.5vh 0.8vw;
  margin-top: -3vh;
  left: 0;
`;

export const ListContainer = styled.div`
  overflow: visible;

  h2 {
    font-size: 2.5vw;
    padding-left: 1vw;
    margin-top: 2vh;
  }
`;

export const AllTasksButton = styled.button`
  font-size: 2.5vw;
  border-radius: 3vw;
  padding: 2vw;
`;

export const Task = styled.div`
  width: 35vw;
  margin-left: -2vw;
`;

export const TasksListButton = styled.button`
  padding: 2vw;
`;

export const Buttons = styled.div`
  gap: 0.8vw;
  border-radius: 1vw;
`;

export const ModalContent = styled.div`
  width: 50vw;
`;

export const MobileBadge = styled.div`
  width: 12px;
  height: 12px;
  font-size: 11px;
`;

export const DotCalendar = styled.span`
  background-color: red;
  border-radius: 50%;
  width: clamp(0.4vw, 0.6em, 8px);
  height: clamp(0.4vw, 0.6em, 8px);
  margin: 0.3vh;
  display: inline-block;
  cursor: pointer;
`;

export const MobileContainer = styled.div`
  overflow: visible;
`;

//----------------------------------------//
 
// export const ResponsiveBody = styled.body`
//   @media screen and (max-width: 768px) {
//     font-size: 14px;
//   }
// `;

// export const ResponsiveLeft = styled.div`
//   @media screen and (max-width: 768px) {
//     padding-top: 3vh;
//     overflow: visible;
//   }
// `;

// export const ResponsiveRight = styled.div`
//   @media screen and (max-width: 768px) {
//     padding-top: 3vh;
//     overflow: visible;
//   }
// `;

// export const ResponsiveHeading = styled.h1`
//   @media screen and (max-width: 768px) {
//     font-size: 1.2rem;
//   }
// `;

// export const ResponsiveFloatingAddBtn = styled.button`
//   @media screen and (max-width: 768px) {
//     width: 7vw;
//     height: 7vw;
//     font-size: 4vw;
//     margin-right: 0.5vw;
//     margin-top: 3vh;
//   }
// `;

// export const ResponsiveInputGroup = styled.div`
//   @media screen and (max-width: 768px) {
//     font-size: 2vw;
//   }
// `;

// export const ResponsiveTableData = styled.td`
//   @media screen and (max-width: 768px) {
//     &::before {
//       top: 50%;
//       width: 8vw;
//       height: 7vw;
//     }
//   }
// `;

export const LeftSection = styled.div`
  padding-top: 3vh;
  overflow: visible;

//   @media screen and (max-width: 768px) {
//     padding-top: 3vh;
//     overflow: visible;
//   }
`;

export const RightSection = styled.div`
  padding-top: 3vh;
  overflow: visible;

//   @media screen and (max-width: 768px) {
//     padding-top: 3vh;
//     overflow: visible;
//   }
`;

export const FloatingAddButton = styled.button`
    width: 7vw;
    height: 7vw;
    font-size: 4vw;
    margin-right: 0.5vw;
    margin-top: 3vh;
`;

export const InputGroup = styled.div`
    font-size: 2vw;
`;

export const TableCell = styled.td`
  position: relative;

  &::before {
    width: 8vw;
    height: 7vw;
    top: 50%;
  }
`;
