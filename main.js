


function addItem(){
    let items = document.getElementById("item").value;
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    let text = document.createTextNode(items);
    let input = document.getElementById("item");
    li.appendChild(text);
    ul.appendChild(li);
    input.value = "";

}