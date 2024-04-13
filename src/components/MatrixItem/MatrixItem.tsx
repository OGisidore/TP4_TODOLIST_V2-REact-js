/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 16:41:41
*/
import React, { FC, useEffect } from 'react';
import './MatrixItem.css';


interface MatrixItemProps {
 
}


const MatrixItem : FC<MatrixItemProps> = () =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="MatrixItem">
          MatrixItem Component
      </div>
  );
}

export default MatrixItem;