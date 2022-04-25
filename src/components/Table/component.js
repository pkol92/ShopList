
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import DeleteItem from '../DeleteItem/DeleteItem'
export const Table = () => {

  const [test, setTest] = useState([
    {
      id: 1,
      name: 'edww',
      description: 'Lorem ipsum',
      price: 2,
      weight: 3
    },
    {
      id: 2,
      name: 'cccc',
      description: 'Lorem ipsum',
      price: 2,
      weight: 3
    },
    {
      id: 3,
      name: 'xxxx',
      description: 'Lorem ipsum',
      price: 2,
      weight: 3
    },
    {
      id: 4,
      name: 'zzzz',
      description: 'Lorem ipsum',
      price: 2,
      weight: 3
    },

  ]) 

  

  return (
    <div className='container mt-5'>
      <div className="row row-cols-2 gap-5 justify-content-center">
        {test.map( item => (
          <div key={item.id} className='col-auto border p-2'>
             <div className='fw-bold h4'>{item.name}</div> 
             <div>{item.description}</div> 
             <div>{item.price}</div> 
             <div>{item.weight}</div> 
             <DeleteItem id={item.id} test={test} setTest={setTest}/>
          </div>
        ))}
      </div>
    </div>
  )

}


// export default component

// import React, { FC } from 'react';
// import { Record } from '../Record';
// import { StyledTable } from './styles';

// export const Table: FC = () => {
//   return (
//     <StyledTable>
//         Task #3.1
//         Task #9
//         <tbody>
//          <Record />
//         </tbody>
//     </StyledTable> 
//   )
// }
    