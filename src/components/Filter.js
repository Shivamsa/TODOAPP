import React from 'react';

// Filter component provides filtering options for tasks
const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      {/* Dropdown select for filtering tasks */}
      <label>
        Filter:
        <select value={filter} onChange={(e) => onChangeFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
