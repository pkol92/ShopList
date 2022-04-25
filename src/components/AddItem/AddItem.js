import { useState, useEffect } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "./AddItem.styles";

const AddItem = () => {
  const [item, setItem] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemWeight, setitemWeight] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  function handleAddItemButton(e) {
    e.preventDefault();

    setItem((prevState) => {
      return [
        ...prevState,
        {
          id: uuidv4(),
          name: itemName,
          description: itemDescription,
          price: itemPrice,
          weight: itemWeight,
        },
      ];
    });
  }

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <Wrapper>
      <form>
        <label>Nazwa przedmiotu</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        ></input>
        <label>Opis przedmiotu</label>
        <input
          type="text"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
        ></input>
        <label>Cena</label>
        <input
          type="number"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        ></input>
        <label>Waga</label>
        <input
          type="number"
          value={itemWeight}
          onChange={(e) => setitemWeight(e.target.value)}
        ></input>

        <Button type="button" onClick={handleAddItemButton}>
          {" "}
          Dodaj item
        </Button>
      </form>
    </Wrapper>
  );
};

export default AddItem;
