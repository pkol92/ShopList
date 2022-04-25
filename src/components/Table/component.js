
import 'bootstrap/dist/css/bootstrap.css'
// import { useState } from 'react'
import { useItems } from '../../contexts/Items'
// import DeleteItem from '../DeleteItem/DeleteItem'
export const Table = () => {


  const [items, setItems] = useItems()
  

  return (
    <div className='container my-5'>
      <div className="row row-cols-5 gap-4 justify-content-center">
        {items.map( item => (
          <div onClick={ () => console.log('click at item')} key={item.id} className='col border rounded shadow p-3' style={{'cursor': 'pointer'}}>
             <header className='fw-bold h4'>{item.name}</header> 
             <div>{item.description}</div> 
             <div>{item.weight}</div>
             {/* <DeleteItem id={item.id} test={test} setTest={setTest}/> */}
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
    