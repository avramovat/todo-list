import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [priorityFilter, setPriorityFilter] = useState(['high']);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // ✅ 1. Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // ✅ 2. Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const saveTask = (task) => {
    if (task.id) {
      // Editing existing task
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      // Adding new task
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    }
    setModalOpen(false);
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const editTask = (task) => {
    setTaskToEdit(task);
    setModalOpen(true);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (!modalOpen) setModalOpen(true);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        saveTask,
        deleteTask,
        toggleComplete,
        editTask,
        modalOpen,
        setModalOpen,
        selectedDate,
        setSelectedDate,
        handleDateClick,
        priorityFilter,
        setPriorityFilter,
        taskToEdit,
        setTaskToEdit
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};


