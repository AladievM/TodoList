import React, {useState} from 'react'
 // форма добавления Todo 
export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // Предотвращение обновление сайта
        e.preventDefault();
        if (value) {
          // Добавление Todo
          addTodo(value);
          // Очистка формы после отправки
          setValue('');
        }
      };
  return (
    //Вводная строка Todo
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Напишите задачу' />
    <button type="submit" className='todo-btn'>Добавить задачу</button>
  </form>
  )
}