import React from "react";
import { InputGroup, Label, Input } from "../../styles/components/Desktop/TaskInput";

const TaskInput = ({ value, onChange }) => (
  <InputGroup>
    <Label>Task Name</Label>
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter task name"
    />
  </InputGroup>
);

export default TaskInput;
