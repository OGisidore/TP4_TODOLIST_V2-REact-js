/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 16:55:50
*/
import React, { FC, useEffect, useState } from 'react';
import './AddTodoModal.css';
import { matrix } from '../../api/matrixData';
import { Matrice } from '../../models/Matrix';
import { Modal } from 'react-bootstrap';
import { generateID, validateRegisterForm } from '../../Helpers/utiles';
import { useFormik } from 'formik';
import { Todo } from '../../models/Todo';
import { addTodo, updateTodo } from '../../api/apiTodo';
import { useDispatch } from 'react-redux';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';


interface AddTodoModalProps {
  displayModal: boolean
  onClose: () => void
  currentTodo? : Todo
}


const AddTodoModal: FC<AddTodoModalProps> = ({ displayModal, onClose, currentTodo }) => {


  // const [todo, setTodo] = useState<Todo | null>(null)
  const dispatch = useDispatch()
  const validate = (values: any) => validateRegisterForm(values)
  const [formData , setFormData]= useState<Todo >(currentTodo || {
    name : "",
    description : "",
    matrice : undefined,
    status : "Pending"

  })

  var formik = useFormik({
    initialValues: formData,
    validate,
    onSubmit: async () => {
      let result;
      let data;
     if (currentTodo) {
       data  = {...formik.values, updatedAt: new Date()}
      //  setTodo(data)
      result = await updateTodo(data as Todo)
      
      
     } else{
       data = {...formik.values, _id:generateID() , createdAt: new Date()}
      console.log({data});
      // setTodo(data)
      result = await addTodo(data)
     }
      
      if(result.isSuccess){
      formik.resetForm()
      }
      dispatch({
        type : ADD_TO_STORAGE,
        key:"todolist",
        unique : false,
        payload: data
      })
      // e.target.reset()
      onClose()
    


      // if (result.isSuccess) {
      //   setFomError("")

      // }else{

      //   setFomError(result.message)
      // }


      // alert(JSON.stringify(result, null, 2));
    },
  });




  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {
      setFormData({
        name: '',
        description: '',
        matrice: undefined,
        status: "",
  
      })

    }
    runLocalData()
  },[])

  return (

    <Modal show={displayModal} >
      <Modal.Header>
        <Modal.Title> Task Form </Modal.Title>
        <button type="button" onClick={onClose} className="btn-close" data-dismiss="modal" aria-label="Close">
        </button>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={formik.handleSubmit} >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
            />
            {formik.touched.description && formik.errors.name ? (
              <div className='error  '>{formik.errors.name}</div>
            ) : null}
            {/* <div className="error error-name text-danger" /> */}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              rows={3}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className='error'>{formik.errors.description}</div>
            ) : null}
            {/* <div className="error error-description text-danger" /> */}
          </div>
          <div className="form-group">
            <label htmlFor="matrice">Matrice</label>
            <select className="form-control"
              id="matrice"
              onChange={formik.handleChange}
              value={formik.values.matrice}
              name="matrice"
            >
              <option disabled selected>Select an option</option>
              {
                matrix.map((mat: Matrice) => {
                  return <option key={mat._id} value={mat._id}>{mat.value}</option>
                })
              }

            </select>
            {formik.touched.matrice && formik.errors.matrice ? (
              <div className='error'>{formik.errors.matrice}</div>
            ) : null}
            {/* <div className="error error-matrice text-danger" /> */}
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" id="statusPending" onChange={formik.handleChange} defaultValue="Pending" defaultChecked={formik.values.status === "Pending"? true : false} />
              <label className="form-check-label" htmlFor="statusPending">
                Pending
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="status" id="statusCompleted" onChange={formik.handleChange} defaultValue="Completed" defaultChecked={formik.values.status === "Completed"? true : false} />
              <label className="form-check-label" htmlFor="statusCompleted">
                Completed
              </label>
            </div>
            {formik.touched.status && formik.errors.status ? (
              <div className='error'>{formik.errors.status}</div>
            ) : null}
            {/* <div className="error error-status text-danger" /> */}
          </div>


          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Modal.Body>
    </Modal>


  );
}

export default AddTodoModal;