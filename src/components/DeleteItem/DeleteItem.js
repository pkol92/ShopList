

import Button from '../AddItem/Button';


const DeleteItem = ({id, items, setTest}) => {

    function handleDelete(e){
     setTest( items.filter(item=> id !== item.id))
    }
    return ( 
    <Button
    onClick={(e)=> handleDelete(e)}>
    Usuń przedmiot
    </Button> );
}
 
export default DeleteItem;