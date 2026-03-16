function addTask(){

var input=document.getElementById("taskInput")

var task=input.value

var li=document.createElement("li")

li.textContent=task

li.onclick=function(){
this.remove()
}

document.getElementById("taskList").appendChild(li)

input.value=""

}