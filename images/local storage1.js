function validationForm(){

    var name= document.getElementById('name').value;
    var age= document.getElementById('age').value;
    var address= document.getElementById('address').value;

    if (name == 0){
        document.getElementById('name1').innerHTML = "Your name cannot be Empty"
        return false;
    }

    if (age == 0){
        document.getElementById('age1').innerHTML = "Your age cannot be empty"
        return false;
    }

    if (address == 0){
        document.getElementById('age1').innerHTML = "Your age cannot be empty"
        return false;
    }

    return true;
}