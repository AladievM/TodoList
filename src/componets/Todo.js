import React from 'react';
import editSvg from '../svg/edit.svg';
import deleteSvg from '../svg/delete.svg';
// ячейка Todo
export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  //Замена цвета при нажатии на кнопку
const [buttonText, setButtonText] = React.useState('Ожидает');
  const [style, setStyle] = React.useState('Todo1');
  const ChangeColor = () => {
    setStyle('Todo2');
    setButtonText('В процессе');

  };

  return (
    //зачеркивает текст  если выполнено
    <div className={style}>
      <p className={`${task.completed ? 'completed' : ''}`} onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      {/* //Замена цвета при нажатии на кнопку */}
      <div className="button">
        <button onClick={ChangeColor}>{buttonText}</button>
      </div>

      <div className="logos">
        <img width="25" src={editSvg} alt="Pizza logo" onClick={() => editTodo(task.id)} />
        <img width="25" src={deleteSvg} alt="Pizza logo" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
