
function submit() {
    let emptyid = document.querySelector("#userid").value;
    let emptypass = document.querySelector("#password").value;

    if (document.querySelector("#userid").value == "") {
        alert("invalid");
    }
    else if (document.querySelector("#password").value == "") {
        alert("Invalid Password");
    }

    let newele = document.querySelector(".print").cloneNode(tru);


    let var1 = document.querySelector(".form-info");
    //var1.children[0].innerHTML = emptyid;
    newelement.innerHTML = emptyid;



}