import React, { FC, useContext, useState } from 'react';
import ItemContext from '../../context/item-context';
import { Modal } from '../Modal';
import { Container } from './styles';

export const AddNewRecordModal: FC = () => {
  const context = useContext(ItemContext);
  const {items} = context;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);


    function handleSubmit(e: any) {
      e.preventDefault();
      if (name && description && price) {
      context.addItem( [...items, {name, description, price, id: 8}]);
      // context.showNewItem(false);
      // setIsAddNewDetailsModalOpen(false);
    }
  }
  

  return (
    <Modal>
      <Container>
        {/* <form>
          <input type='text' placeholder='name'></input>
          <input type='number' placeholder='price'></input>
          <input type='text' placeholder='description'></input>
          <button type='submit' onClick={()=> context.addItem()}></button>
        </form> */}
        <h4 className="form-title">Add new item</h4>

        <form className="item-form" onSubmit={handleSubmit}>
          <label className="input-label">
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="input-label">
            Description
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label className="input-label">
            Price
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </label>
          <input type="submit" />
        </form>
        Task #7
      </Container>
    </Modal> 
  )
}
    