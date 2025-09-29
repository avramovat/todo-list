import React, { useContext } from 'react';
import Calendar from '../components/mobile/Calendar';
import TaskList from '../components/mobile/TaskList';
import TaskModal from '../components/mobile/TaskModal';
import { TaskContext } from '../context/TaskContext';
import {
  Container, Left, Right, FloatingAddBtn
} from '../styles/responsivnes/components/MobilePageGlobal.js';
const MobilePage = () => {
  console.log("MobilePage loaded");

  const {
    tasks,
    deleteTask,
    toggleComplete,
    editTask,
    saveTask,
    modalOpen,
    setModalOpen,
    selectedDate,
    handleDateClick,
    priorityFilter,
    taskToEdit,
    setTaskToEdit,
  } = useContext(TaskContext);

  return (
    <Container>
      <Left>
        <Calendar
          tasks={tasks}
          priorityFilter={priorityFilter}
          onDateClick={handleDateClick}
        />
      </Left>
      <Right>
        <FloatingAddBtn
          onClick={() => {
            handleDateClick(null);
            setModalOpen(true);
          }}
        >
          +
        </FloatingAddBtn>
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      </Right>

      {modalOpen && (
        <TaskModal
          onClose={() => {
            setModalOpen(false);
            setTaskToEdit(null);
          }}
          onSave={(task) => {
            if (taskToEdit) {
              editTask(task.id, task);
            } else {
              saveTask(task);
            }
            setModalOpen(false);
            setTaskToEdit(null);
          }}
          selectedDate={selectedDate}
          taskToEdit={taskToEdit}
        />
      )}
    </Container>
  );
};

export default MobilePage;



