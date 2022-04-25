import React, { FC, useState } from 'react';

import { Modal } from '../Modal';
import { Container } from './styles';

export interface Item {
  name: string,
  description: string,
  price: number,
}

interface AddNewRecordModalInterface {
  onAdd: (item: Item) => void,
  onBackgroundClick: () => void
}

export const AddNewRecordModal: FC<AddNewRecordModalInterface> = ({onAdd, onBackgroundClick}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(10.0);

  const onClick = () => onAdd({name: name, description: description, price: price});
   
  const inputStyle = "block bg-gray-100 rounded-lg my-2 p-2 placeholder:italic";

  return (
    <Modal onBackgroundClick={onBackgroundClick}>
      <Container className='bg-white w-auto p-2'>
        <div className='flex flex-col'>
          <label className='p-2 text-xl'>
            Name
            <input type="text" className={inputStyle} onChange={e => setName(e.target.value)} placeholder='Name'/>
          </label>
          <label className='p-2 text-xl'>
            Description
            <input type="text" className={inputStyle} onChange={e => setDescription(e.target.value) } placeholder='Description'/>
          </label>
          <label className='p-2 text-xl'>
            Price
            <input type="number" className={inputStyle} onChange={e => setPrice(parseFloat(e.target.value))}/>
          </label>
          
          </div>
        <button className='p-2 bg-[#40B7EA] w-16 m-6 rounded-full' onClick={onClick}> Add</button>
      </Container>
    </Modal> 
  )
}
    