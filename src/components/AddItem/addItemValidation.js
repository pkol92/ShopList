function handleInputText (value, shouldReturn = false){

    const valueIsLongerThan3 = value.length >= 2

    if(valueIsLongerThan3) return true
    else{
        if(shouldReturn) return false
        else throw new alert("Nazwa przedmiotu oraz opis powinny zawierać przynajmniej 2 znaki")
    }

}


function handleInputNumber (value, shouldReturn = false){

    const valueIsNumber = typeof value === "number"

    if(valueIsNumber) return true
    else{
        if(shouldReturn) return false
        else throw new alert("Nazwa przedmiotu oraz opis powinny zawierać przynajmniej 2 znaki")
    }

}