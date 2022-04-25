
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import DeleteItem from '../DeleteItem/DeleteItem'
export const Table = () => {

  const [test, setTest] = useState([
    {
      id: 1,
      name: 'Foobar',
      description: 'Lorem ipsum',
      price: 22,
      weight: 30
    },
    {
      id: 2,
      name: 'Foobar',
      description: 'Lorem ipsum',
      price: 64,
      weight: 12
    },
    {
      id: 3,
      name: 'Foobar',
      description: 'Lorem ipsum',
      price: 43,
      weight: 20
    },
    {
      id: 4,
      name: 'Foobar',
      description: 'Lorem ipsum',
      price: 12,
      weight: 3
    },
    {
      id: 6,
      name: 'Foobar',
      description: 'Lorem ipsum',
      price: 2,
      weight: 50
    },
    {
      id: 7,
      name: 'Foobar',
      description: 'Lorem ipsum',
      price: 23,
      weight: 34
    },
    {
      id: 8,
      name: 'Foobar',
      description: 'Lorem ipsum',
      price: 52,
      weight: 3
    },
    {
      id: 9,
      name: 'Foobar',
      description: 'Lorem ipsum',
      price: 26,
      weight: 3
    },


  ]) 

  


  return (
    <div className='container my-5'>
      <div className="row row-cols-5 gap-4 justify-content-center">
        {test.map( item => (
          <div onClick={ () => console.log('click at item')} key={item.id} className='col border rounded shadow p-3' style={{'cursor': 'pointer'}}>
             <header className='fw-bold h4'>{item.name}</header> 
             <div>{item.description}</div> 
             <div>{item.weight}</div>
             <DeleteItem id={item.id} test={test} setTest={setTest}/>
             <div className='mt-4'>Price: <span className='fw-bold'>{'$'}{item.price}</span> </div> 

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
    