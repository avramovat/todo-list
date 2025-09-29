import styled from "styled-components";

export const TaskCountBadge = styled.div`
    position: absolute;
    top: 0;
    right: 1vw;
    transform: translate(50%, -50%);
    background-color: #333;
    color: white;
    font-size: 11px;
    font-weight: bold;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 4px rgba(0,0,0,0.3);
    z-index: 2;
    pointer-events: none;
    user-select: none;
`;