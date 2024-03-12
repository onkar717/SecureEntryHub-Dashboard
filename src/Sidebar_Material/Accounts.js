import React, { useEffect, useState } from 'react'
import  '../index.css';
// import { useNavigate } from 'react-router-dom';

function Account() {

  const [datauser , setdatauser ] = useState({});

//   const navigate = useNavigate();

    const callAboutPage = async () => {
      try {
        const res = await fetch('/acoounts' , {
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type" : "application/json"
          },
          credentials:'include'
        })

        const data = await res.json();
        setdatauser(data);
        console.log(data);

        if (res.status === 400) {
          const error = new Error(res.error)
          throw error;
        }

      } catch (error) {
        console.log(error);
        // navigate('/login');
      }
    }

  useEffect(() => {
    callAboutPage();
  }, [])

  return (
    <div>
     
     <div className='container'>
      <form method='GET'>
        <div className='row'>
        <div className=''>
          <img src=''  alt='Loading...'/>
        </div>
        <div className=''>
      <div className='profile'>
        <h2>{datauser.name}</h2>
        <h3>{datauser.email}</h3>
        <h2>{datauser.work}</h2>
        <h2>{datauser.phone}</h2>
        <p>RANKINGS</p>
      </div>
        </div>
        </div>
      </form>
     </div>

    </div>
  )
}

export default Account;