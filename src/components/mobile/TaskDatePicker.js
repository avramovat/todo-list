import React from "react"; 
import { Label, Input, InputGroup } from "../../styles/components/Mobile/TaskDatePicker";
const TaskDatePicker = ({ value, onChange }) => {
    const formatDateForInput = (date) => {
        if (!date) return '';

        const parsedDate = typeof date === 'string' ? new Date(date) : date;

        if (!(parsedDate instanceof Date) || isNaN(parsedDate.getTime())) return '';

        const localDate = new Date(parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000);
        return localDate.toISOString().slice(0, 16); 
    };

    return (
        <InputGroup>
            <Label>Due Date</Label>
            <Input
                type="datetime-local"
                value={formatDateForInput(value)}
                onChange={(e) => onChange(e.target.value)}
                min={new Date().toISOString().slice(0, 16)} 
            />
        </InputGroup>
    );
};

export default TaskDatePicker;