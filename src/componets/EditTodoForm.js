import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // Предотвращение обновление сайта
    e.preventDefault();
    // редактировать Todo
    editTodo(value, task.id);
  };
  return (
    //Форма для редактирования при нажатии на ключик
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-btn">
        Изменить
      </button>
    </form>
  );
};
