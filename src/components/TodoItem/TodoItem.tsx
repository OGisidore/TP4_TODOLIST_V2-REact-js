/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 16:41:41
*/
import React, { FC, useEffect } from 'react';
import './TodoItem.css';


interface TodoItemProps {
 
}


const TodoItem : FC<TodoItemProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="TodoItem">
          TodoItem Component
      </div>
  );
}

export default TodoItem;