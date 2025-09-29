import styled from "styled-components";

export const TaskListStyled = styled.ul`
     list-style-type: none;
     padding: 0;
     overflow-y: auto; 
`;

export const TaskItem = styled.li`
    background-color: #f9f9f9;
    padding: 1.46vw;
    margin: 0.98vw 0;
    // border-left: 0.49vw solid #ddd;
    font-size: 1.56vw;

  &.completed {
    text-decoration: line-through;
    opacity: 0.6;
    transition: all 0.3s ease-in-out;
  }
`;

export const AllTasksContainer = styled.div`
    margin-top: -1.5vw;
    max-height: 100%;
    overflow-y: auto;
    position: relative;
`;

export const Container = styled.div`
    transform: none;
    margin: 0;
    padding: 1vw;
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    position: relative;
    border-radius: 1.95vw;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    max-height: 90%;
    transform-style: preserve-3d;
    transition: transform 0.5s ease, box-shadow 0.5s ease;
    perspective: 1000px;
    max-width: 50vw;
    text-align: center;

  &::-webkit-scrollbar {
    width: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::-webkit-scrollbar {
    opacity: 1;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(83, 66, 193);
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(113, 105, 170);
  }
`;

// export const Controls = styled.div`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 2vw;
//     position: relative;
//     margin-top: -4.5vh;
//     padding: 0 1vw;
// `;

export const Controls = styled.div`
  position: absolute;
  top: 3vw;
  left: 1vw;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 1vw 2vw;
  border-radius: 1vw;
`;

export const Options = styled.select`
    border: 2px solid rgb(83, 66, 193);
    font-weight: bold;
    background-color: rgb(83, 66, 193);
    color: white;
    cursor: pointer;
    background-image: url('data:image/svg+xml;utf8,<svg fill="white" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>');
    background-repeat: no-repeat;
    background-position: right 1vw center;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    z-index: 1001;
    position: relative;
    font-size: 2vw;
    border-radius: 4vw;
    padding: 0.5vh 0.8vw;
    left: 0;
`;

export const Heading = styled.h2`
    color: white;
    text-align: center;
    text-shadow: 0 0 5px #eeaeca, 0 0 10px rgb(83, 66, 193);
    font-weight: bold;
    // margin-bottom: 2vh; 
    padding-top: 1.5vh;
    padding-left: 1vw;
    // margin-top: 3vh;
    font-size: 2.5vw;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  border-radius: 1vw;

  button {
    background-color: white;
    color: rgb(83, 66, 193);
    border: white;
    border-radius: 8px;
    padding: 1vw;
    font-weight: 900;
    cursor: pointer;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Task = styled.li`
  padding: 0.98vw;
  margin: 0.98vw;
  color: white;
  border-radius: 1.95vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.78vw 1.17vw;
  background-color: rgb(225, 97, 153);
  margin-left: -1.5vw;
  width: 35vw;
  margin-left: -0.5vw;

  &:hover {
    transform: scale(1.02);
    box-shadow: 15px 15px 30px rgba(0, 0, 0, 0.3);
  }

    input[type="checkbox"] {
    display: none;
  }

`;

export const ToggleAllTasksButton = styled.button`
    border-radius: 8px;
    font-weight: 900;
    position: sticky;      
    bottom: 0;   
    margin: 1.95vw auto;
    margin-top: auto;
    background-color: rgb(83, 66, 193);
    border: none;
    color: white;
    cursor: pointer;
    box-shadow: 0 0.3vw 0.3vw rgba(0, 0, 0, 0.2);
    z-index: 10;
    background-clip: padding-box; 
    margin-bottom: 1vh;
    font-size: 1.5vw;
    border-radius: 3vw;
    padding: 1vw;

  &:hover {
    transform: scale(1.02);
    box-shadow: 15px 15px 30px rgb(83, 66, 193);
  }
`;

export const Tasks = styled.ul`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
`;

export const Completed = styled.span`
  text-decoration: line-through;
  opacity: 0.6;
`;