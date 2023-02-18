let inputEl =document.getElementById("input-space-place")
let addTextBtn = document.getElementById('input-add-btn')
let tasklist = document.getElementById("task-list")




addTextBtn.addEventListener("click",()=>{
    const task =inputEl.value;
    if (task){
        const li = document.createElement("li");
        li.innerHTML = task + "<button class='delet-button'>X</button>";
        tasklist.appendChild(li);
        inputEl.value = "";
    }
})

tasklist.addEventListener("click",(event)=>{
    if(event.target.className==="delet-button"){
        event.target.parentElement.remove();
    }
})

/*li.addEventListener("click",() => {
    localStorage.setItem("elementState","clicked")
})


window.addEventListener("load", () => {
    const elementState =localStrage.getItem("li");
    li.classlist.add("clicked")
})*/