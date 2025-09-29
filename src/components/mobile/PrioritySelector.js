import React from "react";
import { priorities } from "../../utils/constants";
import { Label, Select, InputGroup } from "../../styles/components/Mobile/PrioritySelector";
const PrioritySelector = ({ value, onChange }) => (
  <InputGroup>
    <Label>Priority</Label>
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
      {priorities.map((priority) => (
        <option key={priority} value={priority}>
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </option>
      ))}
    </Select>
  </InputGroup>
);

export default PrioritySelector;