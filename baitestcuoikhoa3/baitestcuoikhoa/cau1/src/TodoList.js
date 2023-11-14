import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const TodoList = ({ tasks, toggleTaskStatus, reorderTasks }) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;
    reorderTasks(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            className="todo-list-container"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="header">You have {tasks.length} tasks left!</div>
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`todo-item-container ${task.done ? "done" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTaskStatus(task.id)}
                    />
                    <div className="item-title">{task.title}</div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
