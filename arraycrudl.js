let car_brands = ["AUDI", "BMW", "BENTELY", "FERRARI", "TATA"];

let Listall = () => {
    let temp = "";

    car_brands.map(
        (one) => {
            temp += "<tr><td>" + one + "</td></tr>";
        }
    );

    document.getElementById('view').innerHTML = "<table ><thead><tr><th>CURRENTLY AVAILABLE CARS LIST</th></tr><thead><tbody bgcolor='red' align='center'>" + temp + "</tbody></table>"
}


function Add() {
    let newcar = document.getElementById('car_value').value

    car_brands.unshift(newcar);
    alert(" new car is available ,car name is :" + newcar);
    Listall();
}

let Update = () => {
    let indexvalue = document.getElementById('car_value').value;

    let newvalue = prompt("enter your new value -replace in" + car_brands[indexvalue]);

    car_brands[indexvalue] = newvalue;

    // car_brand[0]=AUDI1;
    Listall();
}


function Remove() {
    let deletevalue = document.getElementById('car_value').value;

    // delete car_brands[indexvalue];
    car_brands = car_brands.filter(
        (one) => {
            if (one !== deletevalue) {
                return one;
            }
        }
    )
    Listall();
}


function Search() {
    let searchvalue = document.getElementById('car_value').value;

}