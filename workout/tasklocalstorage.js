function check(){
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    var confirm =document.getElementById("confirm").value;
    var question =document.getElementById("question").value;
    var answer =document.getElementById("answer").value;
    var language = document.getElementById("language").value;
    var name=document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pannumber = document.getElementById("pannumber").value;
    var address = document.getElementById("address").value;


    if (username.length == 0) {
        document.getElementById("username1").innerHTML = "Your username cannot be empty"
        return false;
    }
    else if ((/^[a-z A-z 0-9 [@.]]$/).test(username)) {
        document.getElementById("username1").innerHTML = "Your username should be in Alphabets"
        return false;
    }

    if (password.length == 0) {
        document.getElementById("password1").innerHTML = "Your password cannot be empty"
        return false;
    }
    else if ((/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*-_]){8,8}$/).test(password)) {
        document.getElementById("password1").innerHTML = "Your password should be in numbers"
        return false;
    }

    if ( confirm != password ){
        document.getElementById("confirm1").innerHTML = "Your password is mismatch"
        return false;
    }

    if (confirm.length == 0) {
        document.getElementById("confirm1").innerHTML = "Your confirm password cannot be empty"
        return false;
    }
    else if ((/^[0-9]$/).test(confirm)) {
        document.getElementById("confirm1").innerHTML = "Your confirm password should be in numbers"
        return false;
    }

    if (question.length == 0) {
        document.getElementById("question1").innerHTML = "Your security question cannot be empty"
        return false;
    }
    else if(question == "choose")
    {
        alert("choose the correct question");
        return false;
    }
    else if ((/^[a-z A-z]$/).test(name)) {
        document.getElementById("question1").innerHTML = "Your security question should be in Alphabets"
        return false;
    }

    if (answer.length == 0) {
        document.getElementById("answer1").innerHTML = "Your security answer cannot be empty"
        return false;
    }
    else if ((/^[a-z A-z]$/).test(name)) {
        document.getElementById("answer1").innerHTML = "Your security answer should be in Alphabets"
        return false;
    }

     if(language == "chooselanguage")
    {
        alert("choose the correct language");
        return false;
    }

    if (name.length == 0) {
        document.getElementById("name1").innerHTML = "Your Name cannot be empty"
        return false;
    }
    else if ((/^[a-z A-z]$/).test(name)) {
        document.getElementById("name1").innerHTML = "Your Name should be in Alphabets"
        return false;
    }

    if (email.length == 0) {
        document.getElementById("email1").innerHTML = "Your email cannot be empty"
        return false;
    }
    else if ((/^[a-z[@.]]$/).test(email)) {
        document.getElementById("email1").innerHTML = "Your email should be in numbers"
        return false;
    }

    if (pannumber.length == 0) {
        document.getElementById("pan1").innerHTML = "Your PAN number cannot be empty"
        return false;
    }
    else if ((/^[0-9 A-Z]{10,10}$/).test(pannumber)) {
        document.getElementById("pan1").innerHTML = "Your PAN should be in under condition"
        return false;
    }

    if (address.length == 0) {
        document.getElementById("address1").innerHTML = "Your Address cannot be empty"
        return false;
    }
    else if ((/^[a-z A-z 0-9 [,/]]{1,20}$/).test(address)) {
        document.getElementById("address1").innerHTML = "Your Address should be in Characters"
        return false;
    }
    return true;

}

function showData() {
    var userList = "";
    if (localStorage.getItem("peopleList") == null) {
        userList = [];
    }
    else {
         userList = JSON.parse(localStorage.getItem("peopleList"));
    }
    var html = "";

    userList.forEach((element, index) => {
        html += "<tr>";
        html += "<td>" + element.username + "</td>";
        html += "<td>" + element.password + "</td>";
        html += "<td>" + element.confirm + "</td>";
        html += "<td>" + element.question + "</td>";
        html += "<td>" + element.answer + "</td>";
        html += "<td>" + element.language + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.pannumber + "</td>";
        html += "<td>" + element.address + "</td>";
        html += '<td> <button class="btn-outline-danger" onclick="deleteData(' + index + ')">DELETE</button><br><br><button class="ms-2 btn-outline-success" onclick="updateData(' + index + ')">EDIT</button></td>'
        html += "</tr>";
    })
    document.querySelector('#crudTable tbody').innerHTML = html;
}


document.onload = showData();


function addData() {
    if (check() == true) {
        var username =document.getElementById("username").value;
        var password =document.getElementById("password").value;
        var confirm =document.getElementById("confirm").value;
        var question =document.getElementById("question").value;
        var answer =document.getElementById("answer").value;
        var language =document.getElementById("language").value;
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var pannumber = document.getElementById("pannumber").value;
        var address= document.getElementById("address").value;

        let userList;
        if (localStorage.getItem("peopleList") == null) {
            userList = [];
        }
        else {
            userList = JSON.parse(localStorage.getItem("peopleList"));
        }
        userList.push({
            username : username,
            password : password,
            confirm : confirm,
            question : question,
            answer : answer,
            language: language,
            name: name,
            email: email,
            pannumber: pannumber,
            address: address,
        });

        localStorage.setItem("peopleList", JSON.stringify(userList));

        showData();
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm").value = "";
        document.getElementById("question").value = "";
        document.getElementById("answer").value = "";
        document.getElementById("language").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pannumber").value = "";
        document.getElementById("address").value = "";
    }
}

document.onload = showData();

function deleteData(index) {
    let userList;
    if (localStorage.getItem("peopleList") == null) {
        userList = [];
    }
    else {
        userList = JSON.parse(localStorage.getItem("peopleList"));
    }

    userList.splice(index, 1);

    localStorage.setItem("peopleList", JSON.stringify(userList));

    showData();
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm").value = "";
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
    document.getElementById("language").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pannumber").value = "";
    document.getElementById("address").value = "";
}

document.onload = showData();

let updateData = (pos) => {
    document.getElementById("Submit").style.display = 'none';
    document.getElementById("Update").style.display = 'block';
    

    let userList;
    if (localStorage.getItem("peopleList") == null) {
        userList = [];
    }
    else {
        userList = JSON.parse(localStorage.getItem("peopleList"));
    }


    document.getElementById("username").value = userList[pos].username;
    document.getElementById("password").value = userList[pos].password;
    document.getElementById("confirm").value = userList[pos].confirm;
    document.getElementById("question").value = userList[pos].question;
    document.getElementById("answer").value = userList[pos].answer;
    document.getElementById("language").value = userList[pos].language;
    document.getElementById("name").value = userList[pos].name;
    document.getElementById("email").value = userList[pos].email;
    document.getElementById("pannumber").value = userList[pos].pannumber;
    document.getElementById("address").value = userList[pos].address;
    

    document.getElementById("Update").onclick = function () {
        userList[pos].username = document.getElementById("username").value;
        userList[pos].password = document.getElementById("password").value;
        userList[pos].confirm = document.getElementById("confirm").value;
        userList[pos].question = document.getElementById("question").value;
        userList[pos].answer = document.getElementById("answer").value;
        userList[pos].language = document.getElementById("language").value;
        userList[pos].name = document.getElementById("name").value;
        userList[pos].email = document.getElementById("email").value;
        userList[pos].pannumber = document.getElementById("pannumber").value;
        userList[pos].address = document.getElementById("address").value;
        

        localStorage.setItem("peopleList", JSON.stringify(userList));
        showData();
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm").value = "";
        document.getElementById("question").value = "";
        document.getElementById("answer").value = "";
        document.getElementById("language").value = "";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pannumber").value = "";
        document.getElementById("address").value = "";
    }
}
document.onload = showData();