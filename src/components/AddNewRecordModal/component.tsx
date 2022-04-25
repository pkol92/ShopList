import React, { FC, useState } from 'react';

import { Modal } from '../Modal';
import { Container } from './styles';

export interface Item {
  name: string,
  description: string,
  price: number,
}

interface AddNewRecordModalInterface {
  onAdd: (item: Item) => void
}

export const AddNewRecordModal: FC<AddNewRecordModalInterface> = ({onAdd}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(10.0);

  const onClick = () => onAdd({name: name, description: description, price: price});
   
  const inputStyle = "block bg-gray-300 rounded-lg px-2";

  return (
    <Modal>
      <Container className='bg-white w-auto p-2 cl'>
        <div className='flex flex-col'>
          <label className='p-2'>
            Name
            <input type="text" className={inputStyle} onChange={e => setName(e.target.value)} />
          </label>
          <label className='p-2'>
            Description
            <input type="text" className={inputStyle} onChange={e => setDescription(e.target.value)} />
          </label>
          <label className='p-2'>
            Price
            <input type="number" className={inputStyle} onChange={e => setPrice(parseFloat(e.target.value))} />
          </label>
          
          </div>
        <button className='p-2 bg-red-400 w-16 m-6 rounded-full' onClick={onClick}> Add</button>
      </Container>
    </Modal> 
  )
}
    