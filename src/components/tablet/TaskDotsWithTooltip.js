import React, { useState } from 'react';
import { format } from 'date-fns';
import { Dot, DotContainer } from '../../styles/components/Tablet/TaskDots'; 
import {Tooltip} from '../../styles/components/Tablet/Tooltip';
import RemainingTasksComponent from './RemainingTasksComponent';
import { createPortal } from 'react-dom';

const priorityColors = {
  high: '#f87171',
  medium: 'rgb(235, 220, 88)',
  low: 'rgb(80, 205, 178)',
};

const TaskDotsWithTooltip = ({ dayTasks, onDateClick }) => {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  const showTooltip = (e, text) => {
    setTooltip({
      visible: true,
      text,
      x: e.clientX + 10,
      y: e.clientY + 10,
    });
  };

  const hideTooltip = () => {
    setTooltip({ visible: false, text: '', x: 0, y: 0 });
  };

  const firstTwoTasks = dayTasks.slice(0, 2);
  const remainingTasks = dayTasks.length > 2 ? dayTasks.slice(2) : [];

  return (
    <DotContainer>
      {firstTwoTasks.map(task => (
        <Dot
          key={task.id}
          style={{
            backgroundColor: priorityColors[task.priority]
          }}
          onMouseEnter={(e) =>
            showTooltip(
              e,
              `${task.name} - ${task.priority} (${format(new Date(task.dueDate), 'MM/dd/yyyy, h:mm:ss a')})`
            )
          }
          onMouseLeave={hideTooltip}
          onClick={(e) => {
            e.stopPropagation();
            onDateClick(new Date(task.dueDate));
          }}
        />
      ))}
        {remainingTasks.length > 0 && (
          <RemainingTasksComponent
            remainingTasks={remainingTasks}
            showTooltip={showTooltip}
            hideTooltip={hideTooltip}
          />
        )}

      {tooltip.visible &&
        createPortal(
          <Tooltip style={{ top: tooltip.y, left: tooltip.x, display: 'block', position: 'fixed' }}>
            {tooltip.text}
          </Tooltip>,
          document.body
        )}
    </DotContainer>
  );
};

export default TaskDotsWithTooltip;