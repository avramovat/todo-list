import styled from "styled-components";

// Header
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    font-size: 2vw;
    margin-top: 1vh; //ako ne 0

  button {
    background-color: rgb(83, 66, 193);
    border: 1px solid rgb(83, 66, 193);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 1.95vw;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    padding: 0.98vw;
    font-weight: 900;
    color: white;

    &:hover {
      transform: rotateY(0deg) rotateX(0deg) scale(1.02);
      box-shadow: 15px 15px 30px rgb(83, 66, 193);
    }
  }
`;

// Table and TableCell
export const CalendarTable = styled.table`
  width: 100%;
  border-collapse: separate;  
//   border-spacing: 8px 4px; 
`;

export const CalendarTd = styled.td`
    width: 6vw;
    height: 7vw; 
    border: 1px solid #ccc;
    text-align: center;
    vertical-align: middle; 
    border-radius: 50%;  
    position: relative;
    font-size: 1vw; 
    border: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    overflow: visible; 
    z-index: 1; 

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6vw;
    height: 6vw;
    border-radius: 1vw;
    transform: translate(-50%, -50%);
    background-color: transparent;
    transition: background-color 0.3s ease;
    z-index: 0;
  }

  &:hover::before {
    box-shadow: 15px 15px 30px rgb(130, 126, 156);
  }
    
   ${(props) =>
    props.$isDisabled &&
    `
    pointer-events: none;
    opacity: 0.4;
    cursor: default;
  `}

  &.disabled {
    cursor: default;

    &:hover::before {
      box-shadow: none;
    }
  }

  &.empty {
    cursor: default;
    pointer-events: none;
  }
`;

export const CalendarTh = styled.thead`
   gap: 1vw;
    font-size: 2vw;
    color: grey;
//   th {
//     border: none;
//     padding: 8px 12px;
//     color: grey;
//   }
`;

export const DayLabel = styled.div`
  color: gray;
`;

// Container
export const CalendarContainer = styled.div`
  margin-right: -2.93vw;
  transform: none;
  margin: 0;
  padding: 1vw;
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
  border-radius: 1.95vw;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-height: 90%;
  max-width: 50vw;
  text-align: center;
  overflow-y: hidden;
`;

export const Grid = styled.div`
  margin-top: 2vh;
`;