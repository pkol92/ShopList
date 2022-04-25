import { createContext, useContext, useEffect, useState } from "react";


const ItemsContext = createContext()


export const ItemsProvider = ({children}) => {

  const initialState = [
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


  ]
  const [items, setItems] = useState(()=>{
    const data = localStorage.getItem("items")
    
    return data ? JSON.parse(data) : initialState
  })
  // const addToItems = (item) => setItems([...items, item])
  // const removeFromItems = (item) => setItems(items.filter( i => i !== item))

  useEffect(()=>{
    localStorage.setItem("items", JSON.stringify(items))
  },[items])

  return (
    <>
      <ItemsContext.Provider value={[items, setItems]}>
        {children}
      </ItemsContext.Provider>
    </>
  )
}


export const useItems = () => {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}