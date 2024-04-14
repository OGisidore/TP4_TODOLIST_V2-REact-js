/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 17:08:12
*/
import React, { FC, useEffect, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';
import AddTodoModal from '../../components/AddTodoModal/AddTodoModal';
import { getAllTodo } from '../../api/apiTodo';
import { ADD_TO_STORAGE } from '../../redux/actions/actionTypes';
import { useDispatch } from 'react-redux';
import { matrix } from '../../api/matrixData';
import { Matrice } from '../../models/Matrix';
import MatrixItem from '../../components/MatrixItem/MatrixItem';


interface HomeProps {

}


const Home: FC<HomeProps> = () => {


  const [displayModal, setDisplayModal] = useState<boolean>(false)

const dispatch = useDispatch()

  const runLocalData = async () =>{
    const dataResult = await getAllTodo()
    if(dataResult.isSuccess){
      
      dispatch({
        type: ADD_TO_STORAGE,
        key : "todolist",
        unique: true,
        payload : dataResult.results
      })
    }
   }
  
  useEffect(() => {
    window.scrollTo(0, 0)
    
    runLocalData()
  }, [])
  const handleAdd = ()=>{
    // alert("hello")
    setDisplayModal(true)
  }

  return (
    <>
     <AddTodoModal 
     displayModal={displayModal}
     onClose={()=>setDisplayModal(false)}
     /> 
    
     <div className="container-fluid my-4">
      <div className="row">
        <div className="col-md-2">
          <button type="button" onClick={handleAdd} className="btn btn-primary add">
            Add Task
          </button>
        </div>
        <div className="col">
          <div className="row">
            {
            matrix.map((mat:Matrice)=>{
              return <MatrixItem key={mat._id}  matrix={mat._id} matriceValue={mat.value}/>
            })
          }
          </div>
          
        </div>
      </div>
     
    </div>


    </>
   
  );
}

export default Home;