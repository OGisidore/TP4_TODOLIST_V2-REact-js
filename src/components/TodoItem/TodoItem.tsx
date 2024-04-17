/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 16:41:41
*/
import React, { FC, useEffect, useState } from 'react';
import './TodoItem.css';
import { Todo } from '../../models/Todo';
import { deleteTodo, updateTodo } from '../../api/apiTodo';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE, REMOVE_FROM_STORAGE } from '../../redux/actions/actionTypes';
import TodoViewModal from '../TodoViewModal/TodoViewModal';
import AddTodoModal from '../AddTodoModal/AddTodoModal';


interface TodoItemProps {
  task: Todo

}


const TodoItem: FC<TodoItemProps> = ({ task }) => {

  const [displayModal, setDisplayModal] = useState<boolean>(false)
  const [displayViewModal, setDisplayViewModal] = useState<boolean>(false)

  const handleEdit = () => {
    setDisplayModal(true)

  }
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })
  const handleChange = async () => {
    if (task.status === "Completed") {
      task.status = "Pending"
    } else {
      task.status = "Completed"

    }
    await updateTodo(task)
    dispatch({
      type: ADD_TO_STORAGE,
      key: "todolist",
      unique: false,
      payload: task
    })
  }

  const handleSetView = () => {
    setDisplayViewModal(true)
  }
  const handleDelete = async () => {
    const result = confirm("Confirmez-vous la suppression de : " + task.name)
    if (result) {
      await deleteTodo(task._id!)
      dispatch({
        type: REMOVE_FROM_STORAGE,
        key: "todolist",
        unique: false,
        payload: task
      })
      if (task.matrice) {
        document.getElementById(task.matrice.toString())?.classList.remove('over')
      }
    }


  }
  const dragStart = (event: any, id: string) => {
    event.dataTransfer.setData("text/plain", id)
  }

  return (
    <li draggable={true} onDragStart={(event) => dragStart(event, task._id!)} className="task d-flex" id={`${task._id}`}>
      <AddTodoModal onClose={() => setDisplayModal(false)} displayModal={displayModal} currentTodo={task} />
      <TodoViewModal task={task} displayModal={displayViewModal} onClose={() => setDisplayViewModal(false)} />
      <div className="form-check form-switch">
        <input className="form-check-input status"
          type="checkbox" role="switch"
          name="status"
          checked={task.status.includes("Completed") ? true : false}
          onChange={handleChange}
        />
      </div>
      <div className="task-name">
        {task.name}
      </div>
      <div className="action">
        <button className='btn btn-success m-1 view' onClick={handleSetView} > View </button>
        <button className='btn btn-warning m-1 edit' onClick={handleEdit} > Edit </button>
        <button className='btn btn-danger m-1 delete' onClick={handleDelete} > Delete </button>
      </div>
    </li>
  );
}

export default TodoItem;