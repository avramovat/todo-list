import React from "react";
import { priorities, priorityColors } from "../../utils/constants";
import {
  LegendContainer,
  LegendItem,
  LegendDot,
} from "../../styles/components/Desktop/Legend";

const Legend = ({ togglePriority, activePriorities }) => (
  <LegendContainer>
    {priorities.map((level) => {
      const lower = level.toLowerCase();
      const isActive = activePriorities.includes(lower);
      return (
        <LegendItem
          key={level}
          onClick={() => togglePriority(lower)}
          active={isActive}
        >
          <LegendDot
            style={{ backgroundColor: priorityColors[lower] }}
          />
          {level}
        </LegendItem>
      );
    })}
  </LegendContainer>
);

export default Legend;

