
import React from 'react';

import Button from '../AddItem/Button';


const DeleteItem = ({id, test, setTest}) => {

    function handleDelete(e){
     setTest( test.filter(item=> id !== item.id))
    }
    return ( 
    <Button
    onClick={(e)=> handleDelete(e)}>
    Usuń przedmiot
    </Button> );
}
 
export default DeleteItem;