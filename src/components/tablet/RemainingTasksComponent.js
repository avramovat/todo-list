import React from 'react';
import { format } from 'date-fns';
import { RemainingTasksBox } from '../../styles/components/Tablet/RemainingTasksBox';

const RemainingTasksComponent = ({ remainingTasks, showTooltip, hideTooltip }) => {
  const handleMouseEnter = (e) => {
    const text = remainingTasks
      .map(
        (t) =>
          `${t.name} - ${t.priority} (${format(new Date(t.dueDate), 'MM/dd/yyyy, h:mm:ss a')})`
      )
      .join('\n');
    showTooltip(e, text);
  };

  return (
    <RemainingTasksBox onMouseEnter={handleMouseEnter} onMouseLeave={hideTooltip}>
      +{remainingTasks.length}
    </RemainingTasksBox>
  );
};

export default RemainingTasksComponent;
