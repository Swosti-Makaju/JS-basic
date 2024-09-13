const taskList = document.getElementById("task-list");

function inputFieldfn() {
  console.log("hello");
  const entryField = document.getElementById("entry-field");
  const task = entryField.value.trim();
  //trim removes extra spaces

  if (task) {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>  
      <span onclick="removeTask(this)">x</span>
    `;
    taskList.appendChild(li);
    //inserts li inside tasklists(ul)
    entryField.value = "";
    //clears the users input
  }
}

function clearData() {
  taskList.innerHTML = "";
}

function removeTask(element) {
  element.parentElement.remove();
}




/*const array = new Array();



function inputFieldfn(){
      console.log("done");
      const input= document.querySelector("#entry-field");
      console.log(input);
      if(input.value != ""){
            array.push(input.value);
      }else{
            alert("value hala");
      }
      input.value="";
    //  array.push(input).value;
    //  console.log(array);
}*/


//const button=document.getElementById('save-entry');
