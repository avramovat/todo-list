import React, { useState, useEffect } from 'react';
import TaskInput from './TaskInput';
import TaskDatePicker from './TaskDatePicker';
import PrioritySelector from './PrioritySelector';
import { Modal, Content, CloseBtn, Heading, SaveTaskButton } from '../../styles/components/Mobile/TaskModal';
const TaskModal = ({ onClose, onSave, selectedDate, taskToEdit }) => {
    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const hh = String(d.getHours()).padStart(2, '0');
        const min = String(d.getMinutes()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
    };

    const [name, setName] = useState('');
    const [dueDate, setDueDate] = useState(formatDate(selectedDate));
    const [priority, setPriority] = useState('medium');
    const [error, setError] = useState('');

    useEffect(() => {
        if (taskToEdit) {
            setName(taskToEdit.name);
            setDueDate(formatDate(taskToEdit.dueDate));
            setPriority(taskToEdit.priority);
        } else {
            setName('');
            setDueDate(formatDate(selectedDate));
            setPriority('medium');
        }
    }, [taskToEdit, selectedDate]);

    const handleSave = () => {
        if (!name || !dueDate) {
            setError('Please fill in both task name and due date.');
            return;
        }

        const selectedDateTime = new Date(dueDate);
        const now = new Date();

        if (selectedDateTime < now) {
            setError('Cannot create a task in the past.');
            return;
        }

        const taskData = taskToEdit
            ? { ...taskToEdit, name, dueDate, priority }
            : { name, dueDate, priority };

        console.log('Saving task:', taskData);
        onSave(taskData);
        onClose();
    };

    return (
        <Modal>
            <Content>
                <CloseBtn onClick={onClose}>&times;</CloseBtn>
                <Heading>Add Task</Heading>
                {error && <p className="error-message">{error}</p>}
                <TaskInput value={name} onChange={setName} />
                <TaskDatePicker value={dueDate} onChange={setDueDate} />
                <PrioritySelector value={priority} onChange={setPriority} />
                <SaveTaskButton onClick={handleSave}>Save Task</SaveTaskButton>
            </Content>
        </Modal>
    );
};

export default TaskModal;