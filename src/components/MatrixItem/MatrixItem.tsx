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
import { Matrice } from '../../models/Matrix';
import { updateTodo } from '../../api/apiTodo';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';


interface MatrixItemProps {
  matrice: Matrice

}


const MatrixItem: FC<MatrixItemProps> = ({ matrice }) => {


  const todos: Todo[] = useSelector(getTodos)
  console.log(todos);
  console.log(matrice._id);


  var MatriceTodos: Todo[] = todos.filter((todo: Todo) => todo.matrice?.toString() === matrice._id.toString())
  console.log(MatriceTodos);

  console.log({ matriceValue: MatriceTodos });
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  const dragLeave = (event: any) => {
    event.preventDefault()
    const item = event.target
    item.classList.remove('over')
  }
  const allowDrop = (event: any) => {
    event.preventDefault()
    const item = event.target
    item.classList.add('over')
  }
  const onDrop = (event: any) => {
    event.preventDefault()
    // let targetMatrix = event.target
    const itemId = event.dataTransfer.getData("text/plain")
    let droppedTodo: Todo = todos.filter((todo: Todo) => todo._id?.toString() === itemId.toString())[0]
    // console.log({droppedTodo});
    const updatedTodo: Todo = { ...droppedTodo, matrice: matrice._id! }
    console.log({ itemId });
    updateTodo(updatedTodo)
    dispatch({
      type: ADD_TO_STORAGE,
      key: "todolist",
      unique: false,
      payload: updatedTodo
    })
    if(matrice?._id){
      document.getElementById(matrice._id.toString())?.classList.remove('over')
    }
   
    // const draggedElement = document.getElementById(itemId)
    // console.log({targetMatrix})

    // let matrix = undefined

    // if (targetMatrix.classList.contains('task-list')) {
    //     targetMatrix.appendChild(draggedElement)
    //     targetMatrix.classList.remove('over')
    //     matrix = targetMatrix.id
    // } else {
    //      targetMatrix = targetMatrix.closest('.task-list')
    //     // console.log({ parentItems })
    //     if (targetMatrix) {
    //         targetMatrix.appendChild(draggedElement)
    //         targetMatrix.classList.remove('over')
    //         matrix = targetMatrix.id


    //     }

    // }
    // let droppedTodo : Todo = todos.filter((todo : Todo)=> todo._id?.toString() === itemId.toString())[0]
    // console.log({droppedTodo});
    // const updatedTodo : Todo = {...droppedTodo, matrice : matrix}
    // updateTodo(updatedTodo)
    // dispatch({
    //   type : ADD_TO_STORAGE,
    //   key: "todolist",
    //   unique : false,
    //   payload : updatedTodo
    // })


    // console.log(matrix);

    // return {matrix,itemId}

  }

  return (

    <div className="col-md-6">
      <div className="quadrant">
        <div
          className={"quadrant-header " + (matrice._id === 0 ? "one" : matrice._id === 1 ? "two" : matrice._id === 2 ? "three" : matrice._id == 3 ? "four" : "one")}>
          <h4>{matrice.value}</h4>
        </div>
        <ul className="task-list" id={`${matrice._id}`} onDrop={(e) => onDrop(e)} onDragOver={(e) => allowDrop(e)} onDragLeave={(e) => dragLeave(e)}>
          {
            MatriceTodos.map((todo: Todo) => {
              return <TodoItem key={todo._id} task={todo} />
            })
          }



        </ul>
      </div>
    </div>

  );
}

export default MatrixItem;