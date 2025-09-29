import React, { useState } from "react";
import {
  Container,
  Heading,
  Controls,
  Options,
  Tasks,
  Task,
  Buttons,
  ToggleAllTasksButton,
} from "../../styles/components/Desktop/TaskList";

import { FaEdit, FaTrash, FaCheck, FaUndo } from "react-icons/fa";
import { priorityColors } from "../../utils/constants";

const TaskList = ({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
}) => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredTasks = tasks.filter((task) => {
    if (!showAll) {
      const now = new Date();
      const today = new Date(now.setHours(0, 0, 0, 0));
      const due = new Date(new Date(task.dueDate).setHours(0, 0, 0, 0));
      const next7 = new Date(today);
      next7.setDate(today.getDate() + 7);
      if (due < today || due >= next7) return false;
    }
    return filter === "all" || task.priority === filter;
  });

  return (
    <Container>
      <Heading>{showAll ? "All Tasks" : "Upcoming Tasks"}</Heading>
      <Controls>
        <Options value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </Options>
      </Controls>
      <Tasks>
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            completed={task.completed}
            style={{ backgroundColor: priorityColors[task.priority] }}
          >
            {task.name} - {task.priority} ({
              new Date(task.dueDate).toLocaleString()
            })
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
              style={{ marginLeft: "10px" }}
            />
            <Buttons>
              <button onClick={() => editTask(task)}>
                <FaEdit />
              </button>
              <button onClick={() => deleteTask(task.id)} title="Delete">
                <FaTrash />
              </button>
              <button
                onClick={() => toggleComplete(task.id)}
                title={task.completed ? "Undo" : "Complete"}
              >
                {task.completed ? <FaUndo /> : <FaCheck />}
              </button>
            </Buttons>
          </Task>
        ))}
      </Tasks>
      <ToggleAllTasksButton onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show upcoming tasks" : "See all tasks"}
      </ToggleAllTasksButton>
    </Container>
  );
};

export default TaskList;


