let bike_brands = ["R15","MT-15","BAJAJ","DUKE","PULSAR","FASCINO","DIO"];


let List = () =>
{
  let temp ="";

  bike_brands.map(
    (odd) => {
        temp +=  "<tr> <td>" + odd + "</td> </tr>";
    } 
  );

  document.getElementById('view').innerHTML = "<table><thead> <tr> <th> AVAILABLE BIKES LIST</th></tr></thead> <tbody bgcolor='aqua' align='center'>" + temp + "</tbody></table>"

}




function Add()
{
    let newbike = document.getElementById('Bikevalue').value

    bike_brands.push(newbike);
    alert("New Model Bike is  Available Added, Bike Model is :" + newbike);
    List();

}


function Remove() {
    let deletevalue = document.getElementById('Bikevalue').value;

    bike_brands = bike_brands.filter(
        (one) => {
            if (one !== deletevalue) {
                return one;
            }
        }
    )
    alert("Your Bike is Removed:"+ deletevalue);
    List();
}


 function Update()
 {
    let indexvalue = document.getElementById('Bikevalue').value;

    let newvalue = prompt("Enter Your New Value -replace in" + bike_brands[indexvalue]);

    bike_brands [indexvalue] = newvalue;

    List();
}


function Find()
{
    let findvalue = document.getElementById('Bikevalue').value;

    bike_brands = bike_brands.filter(
        (one) => {
            if (one === findvalue) {
                alert("Your Bike is Finded:"+findvalue);
                return one;

            }
        }
    )
    
    List();
}