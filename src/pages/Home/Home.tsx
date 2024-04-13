/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/04/2024 17:08:12
*/
import React, { FC, useEffect } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';


interface HomeProps {
 
}


const Home : FC<HomeProps> = () =>{


    // const [state, setState] = useState<any>(null)

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    },[])

  return (
   <div className="row">
  <div className="col-md-2">
    <button type="button" className="btn btn-primary add">
      Add Task
    </button>
  </div>
</div>

  );
}

export default Home;