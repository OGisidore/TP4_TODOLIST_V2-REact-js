/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 16:55:50
*/
import React, { FC, useEffect } from 'react';
import './AddTodoModal.css';
import { matrix } from '../../api/matrixData';
import { Matrice } from '../../models/Matrix';


interface AddTodoModalProps {

}


const AddTodoModal: FC<AddTodoModalProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="AddTodoModal">
      <div>
        <div className="modal fade" id="taskModal" tabIndex={-1} role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="taskModalLabel">Task Form</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
                </button>
              </div>
              <div className="modal-body">
                <form id="taskForm">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                    <div className="error error-name text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" rows={3} required defaultValue={""} />
                    <div className="error error-description text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="matrice">Matrice</label>
                    <select className="form-control" id="matrice" name="matrice" required>
                      <option  disabled selected>Select an option</option>
                      {
                        matrix.map((mat:Matrice)=>{
                          return <option key={mat._id} value={mat._id}>{mat.value}</option>
                        })
                      }
                    
                    </select>
                    <div className="error error-matrice text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="status" id="statusPending" defaultValue="Pending" defaultChecked />
                      <label className="form-check-label" htmlFor="statusPending">
                        Pending
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="status" id="statusCompleted" defaultValue="Completed" />
                      <label className="form-check-label" htmlFor="statusCompleted">
                        Completed
                      </label>
                    </div>
                    <div className="error error-status text-danger" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default AddTodoModal;