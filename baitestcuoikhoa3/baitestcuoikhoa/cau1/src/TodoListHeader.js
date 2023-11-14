import React from "react";

const TodoListHeader = ({toggleShowOnlyNotFinished }) => {
  return (
    <div className="header">
      <label>
        <input
          type="checkbox"
          onChange={toggleShowOnlyNotFinished}
        />
        Show only not finished
      </label>
    </div>
  );
};

export default TodoListHeader;
