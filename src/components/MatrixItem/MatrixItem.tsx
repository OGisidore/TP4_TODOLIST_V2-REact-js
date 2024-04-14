/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 16:41:41
*/
import React, { FC, useEffect } from 'react';
import './MatrixItem.css';
import { useSelector } from 'react-redux';
import { getTodos } from '../../redux/selectors/Selectors';
import { Todo } from '../../models/Todo';
import TodoItem from '../TodoItem/TodoItem';


interface MatrixItemProps {
  matrix:number
  matriceValue:string
}


const MatrixItem : FC<MatrixItemProps> = ({matrix ,matriceValue}) =>{


const todos : Todo[] = useSelector(getTodos)
console.log(todos);
console.log(matrix);


var MatriceTodos : Todo[] = todos.filter((todo : Todo)=> todo.matrice?.toString() === matrix.toString())
console.log(MatriceTodos);

console.log({matriceValue : MatriceTodos});

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
    
    <div className="col-md-6">
      <div className="quadrant">
        <div
         className={"quadrant-header " + (matrix === 0 ? "one" : matrix === 1 ? "two" : matrix === 2 ? "three":matrix == 3 ? "four": "one" )}>
          <h4>{matriceValue}</h4>
        </div>
        <ul className="task-list" id={`${matrix}`}>
          {
            MatriceTodos.map((todo : Todo)=>{
              return <TodoItem key={todo._id} task={todo}/>
            })
          }
          


        </ul>
      </div>
    </div>
   
  );
}

export default MatrixItem;