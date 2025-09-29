import styled from "styled-components";

export const DayNum = styled.div`
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    font-weight: bold;
`;

export const DayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
`;

export const CompletedTaskText = styled.span`
  text-decoration: line-through;
  opacity: 0.6;
  transition: all 0.3s ease-in-out;
`;