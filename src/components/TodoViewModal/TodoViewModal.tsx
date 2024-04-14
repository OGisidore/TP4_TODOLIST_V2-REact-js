/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 16:55:50
*/
import React, { FC, useEffect } from 'react';
import './TodoViewModal.css';
import { Modal } from 'react-bootstrap';
import { Todo } from '../../models/Todo';


interface TodoViewModalProps {
  task:Todo,
  displayModal:boolean,
  onClose:()=>void

}


const TodoViewModal: FC<TodoViewModalProps> = ({task, displayModal, onClose}) => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <Modal show={displayModal}>
      <Modal.Header>
        <Modal.Title>
        View Task
        </Modal.Title>
        <button type="button" onClick={onClose} className="btn-close" data-dismiss="modal" aria-label="Close">
              </button>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td> {task.name}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{task.description}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>{task.status}</td>
                  </tr>
                  <tr>
                    <th>Created At</th>
                    <td>{task.createdAt?.toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <th>Updated At</th>
                    <td>{task.updatedAt?.toLocaleDateString()}</td>
                  </tr>
                </tbody>
              </table>
      </Modal.Body>

    </Modal>
    // <div className="TodoViewModal">
    //   <div className="modal fade" id="viewModal" tabIndex={-1} role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
    //     <div className="modal-dialog" role="document">
    //       <div className="modal-content">
    //         <div className="modal-header">
    //           <h5 className="modal-title" id="viewModalLabel">View Task</h5>
    //           <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
    //           </button>
    //         </div>
    //         <div className="modal-body">
    //           <div id="viewTaskDetails" />
    //           </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    
  );
}

export default TodoViewModal;