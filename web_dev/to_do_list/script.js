let myleads = []
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if (inputBox.value === ""){
        alert("you must write someting!")
    }
    else{
        myleads.push(inputBox.value)
        inputBox.value = ""
        addit()
    }
}
function addit(){
    let listItems = ""
    for(let i=0; i<myleads.length; i++){
        listItems += "<li>" + myleads[i] + "</li>"
    }
    listContainer.innerHTML = listItems
}