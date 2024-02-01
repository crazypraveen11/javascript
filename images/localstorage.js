function validationForms()
{
    var stuid=document.getElementById('stuid').value;
    var name = document.getElementById('name').value;
    var degree = document.getElementById('degree').value;
    var place = document.getElementById('place').value;
    var collegename = document.getElementById('collegename').value;
    

    if (stuid == "") {
        alert("stu_id is compulsory")
        return false;
    }

    if (name == "") {
        alert("name is compulsory")
        return false;
    }

    if (degree == "") {
        alert("degree is compulsory")
        return false;
    }

    if (place == "") {
        alert("place is compulsory")
        return false;
    }

    if (collegename == "") {
        alert("collegename is compulsory")
        return false;
    }

    return true;
}


function showData() {
    var StudentList = "";
    if (localStorage.getItem("peopleList") == null) {
        StudentList = [];
    }
    else {
        StudentList = JSON.parse(localStorage.getItem("peopleList"));
    }
    var html = "";

    StudentList.forEach((element, index) => {
        html += "<tr>";
        html += "<td>" + element.stuid + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.degree + "</td>";
        html += "<td>" + element.place + "</td>";
        html += "<td>" + element.collegename + "</td>";
        html += '<td> <button class="ms-2  btn-outline-danger" onclick="deleteData(' + index + ')">DELETE</button><button class="ms-2 btn-outline-success" onclick="updateData(' + index + ')">EDIT</button></td>'
        html += "</tr>";
    })
    document.querySelector('#crudTable tbody').innerHTML = html;
}

document.onload = showData();



function addData() {
    if (validationForms()== true) {
        
         var stuid = document.getElementById('stuid').value;
         var name = document.getElementById('name').value;
         var degree = document.getElementById('degree').value;
         var place = document.getElementById('place').value;
         var collegename = document.getElementById('collegename').value;
         

        let StudentList;
        if (localStorage.getItem("peopleList") == null) {
            StudentList = [];
        }
        else {
            StudentList = JSON.parse(localStorage.getItem("peopleList"));
        }
        StudentList.push({
            stuid: stuid,
            name: name,
            degree: degree,
            place: place,
            collegename: collegename,  
        });

        localStorage.setItem("peopleList", JSON.stringify(StudentList));

        showData();
        document.getElementById("stuid").value = "";
        document.getElementById("name").value = "";
        document.getElementById("degree").value = "";
        document.getElementById("place").value = "";
        document.getElementById("collegename").value = "";
    }
}



function deleteData(index) {
    let StudentList;
    if (localStorage.getItem("peopleList") == null) {
        StudentList = [];
    }
    else {
        StudentList = JSON.parse(localStorage.getItem("peopleList"));
    }

    StudentList.splice(index, 1);

    localStorage.setItem("peopleList", JSON.stringify(StudentList));

    showData();
    document.getElementById("stuid").value = "";
    document.getElementById("name").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("place").value = "";
    document.getElementById("collegename").value = "";
}

let updateData = (pos) => {
    document.getElementById("Submit").style.display = 'none';
    document.getElementById("Update").style.display = 'block'

    let StudentList;
    if (localStorage.getItem("peopleList") == null) {
        StudentList = [];
    }
    else {
        StudentList = JSON.parse(localStorage.getItem("peopleList"));
    }

    document.getElementById("stuid").value = StudentList[pos].stuid;
    document.getElementById("name").value = StudentList[pos].name;
    document.getElementById("degree").value = StudentList[pos].degree;
    document.getElementById("place").value = StudentList[pos].place;
    document.getElementById("collegename").value = StudentList[pos].collegename;
   

    document.getElementById("Update").onclick = function () {
        StudentList[pos].stuid = document.getElementById("stuid").value;
        StudentList[pos].name = document.getElementById("name").value;
        StudentList[pos].degree = document.getElementById("degree").value;
        StudentList[pos].place = document.getElementById("place").value;
        StudentList[pos].collegename = document.getElementById("collegename").value;
        

        localStorage.setItem("peopleList", JSON.stringify(StudentList));
        showData();
        document.getElementById("stuid").value = "";
        document.getElementById("name").value = "";
        document.getElementById("degree").value = "";
        document.getElementById("place").value = "";
        document.getElementById("collegename").value = "";
    }

}

