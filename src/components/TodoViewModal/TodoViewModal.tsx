/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 16:55:50
*/
import React, { FC, useEffect } from 'react';
import './TodoViewModal.css';


interface TodoViewModalProps {

}


const TodoViewModal: FC<TodoViewModalProps> = () => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="TodoViewModal">
      <div className="modal fade" id="viewModal" tabIndex={-1} role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="viewModalLabel">View Task</h5>
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div className="modal-body">
              <div id="viewTaskDetails" />
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Created At</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Updated At</th>
                    <td></td>
                  </tr>
                </tbody>
              </table></div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default TodoViewModal;