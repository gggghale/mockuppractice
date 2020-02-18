function checkFilled(id) {
    if (id.value == "") {
        document.getElementById('image').style.backgroundColor = "red";
    }
    else{
        document.getElementById('image').style.backgroundColor = "green";
    }
}