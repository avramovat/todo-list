import React, { useContext } from 'react';
import Calendar from '../components/desktop/Calendar';
import TaskList from '../components/desktop/TaskList';
import TaskModal from '../components/desktop/TaskModal';
import { TaskContext } from '../context/TaskContext';
import  { Container, Left, Right, FloatingAddBtn } from '../styles/components/global';


const DesktopPage = () => {
  console.log("DesktopPage loaded");
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
          saveTask(task);  
        }}
        selectedDate={selectedDate}
        taskToEdit={taskToEdit}
      />
      )}
    </Container>
  );
};

export default DesktopPage;
