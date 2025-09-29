import React, { useState, useCallback, useMemo } from "react";
import TaskDotsWithTooltip from "./TaskDotsWithTooltip";
import { months, daysOfWeek, formatDateToYMD } from "../../utils/constants";
import {
  Header,
  CalendarTable,
  CalendarTd,
  CalendarContainer,
  CalendarTh,
  Grid
} from "../../styles/components/Tablet/Calendar";
import {
  DayWrapper,
  DayNum
} from "../../styles/components/Tablet/DayAndTask";
import { TaskCountBadge } from "../../styles/components/Tablet/TaskCountBadge";
import { Subtitle } from "../../styles/components/Tablet/Typography";
import Legend from "./Legend";

const Calendar = ({ tasks, onDateClick }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [priorityFilter, setPriorityFilter] = useState(["high"]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => priorityFilter.includes(task.priority));
  }, [tasks, priorityFilter]);

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const togglePriority = (priority) => {
    setPriorityFilter((prev) =>
      prev.includes(priority) ? [] : [priority]
    );
  };

  const renderCalendar = useCallback(() => {
    const firstDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    const calendar = [];
    let day = 1 - firstDay;

    while (day <= daysInMonth) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const currentDay = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          day
        );
        const currentDayStr = formatDateToYMD(currentDay);

        const dayTasks = filteredTasks.filter((task) => {
          if (!task.dueDate) return false;
          const taskDateStr = formatDateToYMD(task.dueDate);
          return taskDateStr === currentDayStr;
        });

        const allTasksForDay = tasks.filter((task) => {
          const taskDateStr = formatDateToYMD(task.dueDate);
          return taskDateStr === currentDayStr;
        });

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const isPast = currentDay < today;
        const isInMonth = day > 0 && day <= daysInMonth;

        week.push(
          <CalendarTd key={currentDayStr} $isDisabled={!isInMonth || isPast}>
            {isInMonth ? (
              <DayWrapper onClick={() => !isPast && onDateClick(currentDay)}>
                <DayNum>
                  {day}
                  {allTasksForDay.length > 0 && (
                    <TaskCountBadge>{allTasksForDay.length}</TaskCountBadge>
                  )}
                </DayNum>
                <TaskDotsWithTooltip
                  dayTasks={dayTasks}
                  onDateClick={onDateClick}
                />
              </DayWrapper>
            ) : null}
          </CalendarTd>
        );
        day++;
      }
      calendar.push(<tr key={calendar.length}>{week}</tr>);
    }

    return calendar;
  }, [currentDate, filteredTasks, tasks, onDateClick]);

  return (
    <CalendarContainer>
      <Header>
        <button onClick={() => changeMonth(-1)}>&#8592;</button>
        <Subtitle>
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </Subtitle>
        <button onClick={() => changeMonth(1)}>&#8594;</button>
      </Header>

      <Grid>
        <CalendarTable>
          <CalendarTh>
            <tr>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </CalendarTh>
          {renderCalendar()}
        </CalendarTable>
      </Grid>

      <Legend
        togglePriority={togglePriority}
        activePriorities={priorityFilter}
      />
    </CalendarContainer>
  );
};

export default Calendar;
