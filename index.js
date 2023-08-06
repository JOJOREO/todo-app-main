// const { TRUE } = require("sass");

const tasks_list = ["task1", "task2", "task3", "task4", "task5"];
// const tasks_list = ["task1", "task2"];
const all_tasks_section = document.querySelector("#all-tasks");

let arr1 = [];

let object_tasks_list = [
  { id: "task1", text: "task1", status: false },
  { id: "task2", text: "task2", status: false },
  { id: "task3", text: "task3", status: false },
  { id: "task4", text: "task4", status: false },
  { id: "task5", text: "task5", status: false },
];

let object_completed_tasks_list = [];
let object_active_tasks_list = [];
// arr1.push(object_tasks_list);
// console.log(arr1);

// console.log(input_text.value);

//single functions

// all_tasks[1].addEventListener("mouseover", function () {
//   x_buttons[0].setAttribute("style", "display:inline");
//   //   alert("event listener on");
// });

// all_tasks[1].addEventListener("mouseout", function () {
//   x_buttons[0].setAttribute("style", "display:none");
//   //   alert("event listener on");
// });

// checkboxes[1].addEventListener("change", function () {
//   if (this.checked) {
//     console.log("Checkbox is checked..");
//     task_p[0].setAttribute("style", "text-decoration: line-through;");
//   } else {
//     task_p[0].setAttribute("style", "text-decoration: none;");
//   }
// });

//example task html task code

// <div class="task">
//     <input type="checkbox" id="checkbox1">
//     <label for="checkbox1"></label>
//     <p>aaaaaaaaa</p>
//     <button class="x_button"><img src="./images/icon-cross.svg"></button>
//   </div>

//tasks creation dynamically

function displayTasks(tasks_array) {
  for (let i = 1; i < object_tasks_list.length + 1; i++) {
    let a = document.createElement("div");
    a.setAttribute("id", `task${i}`);
    a.setAttribute("class", "task");
    let b = document.createElement("input");
    b.setAttribute("type", "checkbox");
    b.setAttribute("id", `checkbox${i}`);
    if (object_tasks_list[i - 1]["status"] === true) {
      b.setAttribute("checked", `true`);
    }
    let c = document.createElement("label");
    c.setAttribute("for", `checkbox${i}`);
    let d = document.createElement("p");
    d.textContent = tasks_array[i - 1];
    if (object_tasks_list[i - 1]["status"] === true) {
      d.setAttribute("style", "text-decoration: line-through;");
    }
    let e = document.createElement("button");
    e.setAttribute("class", "x_button");
    let f = document.createElement("img");
    f.setAttribute("src", "./images/icon-cross.svg");
    //   e.innerHTML += f;
    e.appendChild(f);
    //   a.innerHTML = b + c + d + e;
    a.appendChild(b);
    a.appendChild(c);
    a.appendChild(d);
    a.appendChild(e);
    console.log(a);
    //   total += a;
    all_tasks_section.appendChild(a);
  }

  // //create last (special) task with buttons

  // <div class="task special">
  //         <P> # items left</P>
  //         <div id="middle_button">
  //           <button>All</button>
  //           <button>active</button>
  //           <button> completed</button>
  //         </div>
  //        <button id="clear">clear completed</button>
  //</div>

  a = document.createElement("div");
  a.setAttribute("class", "task special");
  // a.setAttribute("class", "");
  b = document.createElement("p");
  b.textContent = `${tasks_array.length} items left`;

  c = document.createElement("div");
  c.setAttribute("id", "middle_button");
  d = document.createElement("button");
  d.textContent = "All";
  e = document.createElement("button");
  e.textContent = "active";
  f = document.createElement("button");
  f.textContent = "completed";
  c.appendChild(d);
  c.appendChild(e);
  c.appendChild(f);
  e = document.createElement("button");
  e.setAttribute("id", "clear");
  e.textContent = "clear completed";

  a.appendChild(b);
  a.appendChild(c);
  a.appendChild(e);
  all_tasks_section.appendChild(a);
}

function displayButtonsTask(current_list) {
  a = document.createElement("div");
  a.setAttribute("class", "task special");
  // a.setAttribute("class", "");
  b = document.createElement("p");
  b.textContent = `${current_list.length} items left`;

  c = document.createElement("div");
  c.setAttribute("id", "middle_button");
  d = document.createElement("button");
  d.textContent = "All";
  e = document.createElement("button");
  e.textContent = "active";
  f = document.createElement("button");
  f.textContent = "completed";
  c.appendChild(d);
  c.appendChild(e);
  c.appendChild(f);
  e = document.createElement("button");
  e.setAttribute("id", "clear");
  e.textContent = "clear completed";

  a.appendChild(b);
  a.appendChild(c);
  a.appendChild(e);
  all_tasks_section.appendChild(a);
}

function displaySingleTask(obj) {
  let a = document.createElement("div");
  a.setAttribute("id", `task${obj["id"]}`);
  a.setAttribute("class", "task");
  let b = document.createElement("input");
  b.setAttribute("type", "checkbox");
  b.setAttribute("id", `checkbox${obj["id"]}`);
  if (obj["status"] === true) {
    b.setAttribute("checked", `true`);
  }
  let c = document.createElement("label");
  c.setAttribute("for", `checkbox${obj["id"]}`);
  let d = document.createElement("p");
  d.textContent = obj["text"];
  if (obj["status"] === true) {
    d.setAttribute("style", "text-decoration: line-through;");
  }
  let e = document.createElement("button");
  e.setAttribute("class", "x_button");
  let f = document.createElement("img");
  f.setAttribute("src", "./images/icon-cross.svg");
  //   e.innerHTML += f;
  e.appendChild(f);
  //   a.innerHTML = b + c + d + e;
  a.appendChild(b);
  a.appendChild(c);
  a.appendChild(d);
  a.appendChild(e);
  console.log(a);
  //   total += a;
  all_tasks_section.appendChild(a);
}

displayTasks(tasks_list);

//single show task at js initial run without function

// for (let i = 1; i < tasks_list.length + 1; i++) {
//   let a = document.createElement("div");
//   a.setAttribute("id", `task${i}`);
//   a.setAttribute("class", "task");
//   let b = document.createElement("input");
//   b.setAttribute("type", "checkbox");
//   b.setAttribute("id", `checkbox${i}`);
//   let c = document.createElement("label");
//   c.setAttribute("for", `checkbox${i}`);
//   let d = document.createElement("p");
//   d.textContent = tasks_list[i - 1];
//   let e = document.createElement("button");
//   e.setAttribute("class", "x_button");
//   let f = document.createElement("img");
//   f.setAttribute("src", "./images/icon-cross.svg");
//   //   e.innerHTML += f;
//   e.appendChild(f);
//   //   a.innerHTML = b + c + d + e;
//   a.appendChild(b);
//   a.appendChild(c);
//   a.appendChild(d);
//   a.appendChild(e);
//   console.log(a);
//   //   total += a;
//   all_tasks_section.appendChild(a);
// }

//end of tasks creation dynamically

// //create last (special) task with buttons

// <div class="task special">
//         <P> # items left</P>
//         <div id="middle_button">
//           <button>All</button>
//           <button>active</button>
//           <button> completed</button>
//         </div>
//        <button id="clear">clear completed</button>
//</div>

// a = document.createElement("div");
// a.setAttribute("class", "task special");
// // a.setAttribute("class", "");
// b = document.createElement("p");
// b.textContent = `${tasks_list.length} items left`;

// c = document.createElement("div");
// c.setAttribute("id", "middle_button");
// d = document.createElement("button");
// d.textContent = "All";
// e = document.createElement("button");
// e.textContent = "active";
// f = document.createElement("button");
// f.textContent = "completed";
// c.appendChild(d);
// c.appendChild(e);
// c.appendChild(f);
// e = document.createElement("button");
// e.setAttribute("id", "clear");
// e.textContent = "clear completed";

// a.appendChild(b);
// a.appendChild(c);
// a.appendChild(e);
// all_tasks_section.appendChild(a);

//end of create last (special) task with buttons

const all_tasks = document.querySelectorAll(".task");
const add_new_task = all_tasks[0];

//create new task , capture text code
let timer;
const waitTime = 1000;
let input_text = document.querySelector("input[type='text']");
console.log(input_text);

input_text.addEventListener("keyup", (event) => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    doneTyping(event.target.value);
  }, waitTime);
});

function doneTyping(value) {
  console.log(`The user is done typing: ${value}`);
  tasks_list.unshift(value);
  //   input_text.innerHTML = "";
  all_tasks_section.replaceChildren("");
  displayTasks(tasks_list);
  console.log(tasks_list);
  //   input_text.innerHTML = "";
}

//end of create new task , capture text code

const x_buttons = document.querySelectorAll(".x_button");
const checkboxes_label = document.querySelectorAll("label");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const task_p = document.querySelectorAll(".task p");

console.log(all_tasks); //+1 cuz create
console.log(x_buttons); //start from 0
console.log(add_new_task);
console.log(checkboxes); //+1 cuz create
console.log(checkboxes_label); //+1 cuz create
console.log(task_p); //start from 0
console.log(all_tasks_section); //start from 0

let completed_list = [];
let active_list = [];

function trigerEventListeners() {
  let all_tasks = document.querySelectorAll(".task");
  let add_new_task = all_tasks[0];
  let x_buttons = document.querySelectorAll(".x_button");
  let checkboxes_label = document.querySelectorAll("label");
  let checkboxes = document.querySelectorAll("input[type='checkbox']");
  let task_p = document.querySelectorAll(".task p");

  console.log("rerender \n");
  console.table(object_tasks_list);
  console.log("all_tasks", all_tasks); //+1 cuz create
  console.log("x_buttons", x_buttons); //start from 0
  console.log("add_new_task", add_new_task);
  console.log("checkboxes", checkboxes); //+1 cuz create
  console.log("checkboxes_label", checkboxes_label); //+1 cuz create
  console.log("task_p", task_p); //start from 0
  console.log("all_tasks_section", all_tasks_section); //start from 0

  for (let i = 1; i < object_tasks_list.length - 1; i++) {
    //show x button on hover
    all_tasks[i].addEventListener("mouseover", function () {
      x_buttons[i - 1].setAttribute("style", "display:inline");
      //   alert("event listener on");
    });

    all_tasks[i].addEventListener("mouseout", function () {
      //remove x button when no hover
      x_buttons[i - 1].setAttribute("style", "display:none");
      //   alert("event listener on");
    });

    checkboxes[i].addEventListener("change", function () {
      //strike through when task checked done
      if (object_tasks_list[i - 1]["status"] == true) {
        //   console.log("Checkbox is checked..");
        task_p[i - 1].setAttribute("style", "text-decoration: line-through;");
        object_tasks_list[i - 1]["status"] = true;
        //   completed_list.push(all_tasks[i].textContent);
        completed_list.push(i);

        console.log("item added to completed_list ");
      } else {
        task_p[i - 1].setAttribute("style", "text-decoration: none;");
        object_tasks_list[i - 1]["status"] = false;
        //   completed_list.pop(all_tasks[i].textContent);
        completed_list.pop(i);
        console.log("item removed from completed_list ");
      }
      // console.log("=============================================");
      // for (let i = 0; i < completed_list.length; i++) {
      //   console.log("completed list item: ", completed_list[i]);
      // }
      // console.log("=============================================");
    });
  }
}

// function tester() {
//   const all_tasks = document.querySelectorAll(".task");
//   const add_new_task = all_tasks[0];
//   const x_buttons = document.querySelectorAll(".x_button");
//   const checkboxes_label = document.querySelectorAll("label");
//   const checkboxes = document.querySelectorAll("input[type='checkbox']");
//   const task_p = document.querySelectorAll(".task p");

//   checkboxes.forEach((checkbox, index) => {
//     if (object_tasks_list[index]["status"] == true) {
//       checkbox.setAttribute("checked", "true");
//       task_p[index].setAttribute("style", "text-decoration:'strikethrough'");
//     }
//   });
// }

//adding event listeners

//start i from 1 cuz add new task = 0 , length-1 beacuse of last task elemen doesnt have checkbox
for (let i = 1; i < object_tasks_list.length + 1; i++) {
  // console.log(all_tasks.length);
  // console.log(i);
  //show x button on hover
  all_tasks[i].addEventListener("mouseover", function () {
    x_buttons[i - 1].setAttribute("style", "display:inline");
    //   alert("event listener on");
  });

  all_tasks[i].addEventListener("mouseout", function () {
    //remove x button when no hover
    x_buttons[i - 1].setAttribute("style", "display:none");
    //   alert("event listener on");
  });

  checkboxes[i].addEventListener("change", function () {
    //strike through when task checked done
    if (this.checked) {
      //   console.log("Checkbox is checked..");
      task_p[i - 1].setAttribute("style", "text-decoration: line-through;");
      object_tasks_list[i - 1]["status"] = true;
      //   completed_list.push(all_tasks[i].textContent);
      completed_list.push(i);

      console.log("item added to completed_list ");
    } else {
      task_p[i - 1].setAttribute("style", "text-decoration: none;");
      object_tasks_list[i - 1]["status"] = false;
      //   completed_list.pop(all_tasks[i].textContent);
      completed_list.pop(i);
      console.log("item removed from completed_list ");
    }
    // console.log("=============================================");
    // for (let i = 0; i < completed_list.length; i++) {
    //   console.log("completed list item: ", completed_list[i]);
    // }
    // console.log("=============================================");
  });
}

let middle_buttons = document.querySelectorAll("#middle_button button");
console.log(middle_buttons);
let all_button = middle_buttons[0];
let active_button = middle_buttons[1];
let completed_button = middle_buttons[2];
console.log(all_button);
console.log(active_button);
console.log(completed_button);

// let customarray = [{ id: 0, text: "", status: true }];
// customarray.push({ id: 1, text: `asdnadk ${task_p[0]}`, status: true });
console.log("1", all_tasks);

let tasks_ctr = document.querySelector(".special p");
let all_tasks_array = Array.from(all_tasks);

function ctrFunction() {
  let ff = document.querySelectorAll(".task #");
  let lenz = ff.length;
  console.log("lenz", lenz - 1);
  // return length - 1;
}

completed_button.addEventListener("click", function () {
  console.log("completed button trigger");
  console.log("//////////////////////////////////////////");
  console.log("start \n");
  console.log("object_tasks_list", object_tasks_list);
  console.log("all_tasks_node_list", all_tasks);
  console.log("all_tasks_array", all_tasks_array);
  let ctr = 0;
  let ctr2 = 0;
  let ctr3 = 0;

  copy_array.filter((task, index) => {
    const { id, text, status } = task;
    if (status === true) {
      ctr++;

      all_tasks[index + 1].setAttribute("style", "display: flex;");
    } else {
      ctr2++;

      all_tasks[index + 1].setAttribute("style", "display: none;");
    }

    tasks_ctr.textContent = `${ctr3} items left`;
  });

  object_tasks_list.filter((task, index) => {
    const { id, text, status } = task;
    if (status === true) {
      ctr++;

      all_tasks[index + 1].setAttribute("style", "display: flex;");
    } else {
      ctr2++;

      all_tasks[index + 1].setAttribute("style", "display: none;");
    }

    tasks_ctr.textContent = `${ctr3} items left`;
  });
  console.log("*******************************************");
  console.log("end \n");
  console.log("object_tasks_list", object_tasks_list);
  console.log("all_tasks_array", all_tasks_array);
  console.log("all_tasks_node_list", all_tasks);

  console.log("//////////////////////////////////////////");

  completed_button.setAttribute("style", "color:hsl(220, 98%, 61%);");
  active_button.setAttribute("style", "color:hsl(236, 9%, 61%)");
  all_button.setAttribute("style", "color:hsl(236, 9%, 61%)");
});

active_button.addEventListener("click", function () {
  console.log("active button trigger");
  console.log("//////////////////////////////////////////");
  console.log("start \n");
  console.log("object_tasks_list", object_tasks_list);
  console.log("all_tasks_array", all_tasks_array);
  console.log("all_tasks_node_list", all_tasks);
  let ctr = 0;
  let ctr2 = 0;
  object_tasks_list.filter((task, index) => {
    const { id, text, status } = task;
    // console.log(`task ${index}`, task);
    if (status === true) {
      // tempList[ctr] = task;
      ctr++;
      // console.log("ctr", ctr);
      all_tasks[index + 1].setAttribute("style", "display: none;");
    } else {
      // console.log(tasksCtr[index + 1]);
      ctr2++;
      // console.log("ctr2", ctr2);
      all_tasks[index + 1].setAttribute("style", "display: flex;");
    }

    tasks_ctr.textContent = `${ctr2} items left`;
  });

  console.log("end \n");
  console.log("object_tasks_list", object_tasks_list);
  console.log("all_tasks_array", all_tasks_array);
  console.log("*******************************************");
  console.log("end \n");
  console.log("object_tasks_list", object_tasks_list);
  console.log("all_tasks_array", all_tasks_array);
  console.log("all_tasks_node_list", all_tasks);
  console.log("//////////////////////////////////////////");

  active_button.setAttribute("style", "color:hsl(220, 98%, 61%);");
  completed_button.setAttribute("style", "color:hsl(236, 9%, 61%);");
  all_button.setAttribute("style", "color:hsl(236, 9%, 61%);");
});

all_button.addEventListener("click", function () {
  console.log("all button trigger");
  console.log("//////////////////////////////////////////");
  console.log("start \n");
  console.log("object_tasks_list", object_tasks_list);
  console.log("all_tasks_array", all_tasks_array);
  console.log("all_tasks_node_list", all_tasks);
  object_tasks_list.map((task, index) =>
    all_tasks_array[index + 1].setAttribute("style", "display: flex;")
  );
  tasks_ctr.textContent = `${copy_array.length} items left`;
  // console.log("end \n");
  // console.log("object_tasks_list", object_tasks_list);
  // console.log("all_tasks_array", all_tasks_array);

  console.log("*******************************************");
  console.log("end \n");
  console.log("object_tasks_list", object_tasks_list);
  console.log("all_tasks_array", all_tasks_array);
  console.log("all_tasks_node_list", all_tasks);
  console.log("//////////////////////////////////////////");

  all_button.setAttribute("style", "color:hsl(220, 98%, 61%);");
  completed_button.setAttribute("style", "color:hsl(236, 9%, 61%);");
  active_button.setAttribute("style", "color:hsl(236, 9%, 61%)");
});

let x_buttons_array = Array.from(x_buttons);
x_buttons_array.map((x_button, index) => {
  x_button.addEventListener("click", function () {
    // all_tasks_array[index + 1].setAttribute("style", "display:none");
    all_tasks[index + 1].remove();
    copy_array.splice(index + 1);
  });
});

console.log("x_buttons", x_buttons);
console.log("x_buttons_array", x_buttons_array);

let clearCompleted = document.querySelector("#clear");
// let copy_array = { ...object_tasks_list };
let copy_array = object_tasks_list.slice(0);

clearCompleted.addEventListener("click", function () {
  console.log("copy_array", copy_array);

  let all_tasks_array = Array.from(all_tasks);
  let ctr = 0;
  let ctr2 = 0;
  object_tasks_list.map((task, index) => {
    const { id, text, status } = task;
    // console.log("index", index);
    // console.log("status", status);
    // status === true
    //   ? console.log("all_tasks[index]", all_tasks[index + 1])
    //   : "";
    // status === true ? object_tasks_list.splice(index, 1) : "";
    status === true ? all_tasks[index + 1].remove() : "";
    status === true ? ctr++ : "";
    status === true ? copy_array.splice(index, 1) : "";

    // all_tasks_array = Array.from(all_tasks);
    // status === true ? x.splice(index, 1) : "";

    // status === true ? all_tasks_array.splice(index + 1, 1) : "";

    status === true ? console.log("here") : "";
    status === true ? console.log(all_tasks_array[index + 1]) : "";

    // all_tasks[index + 1].remove();

    // console.log(`task ${index}`, task);
    // if (status === true) {
    //   // tempList[ctr] = task;
    //   ctr++;
    //   // console.log("ctr", ctr);
    //   // all_tasks[index + 1].setAttribute("style", "display: none;");
    //   // console.log("all_tasks", all_tasks);
    //   // all_tasks_section.removeChild(all_tasks[index + 1]);////////////////////////////////////////////
    //   // all_tasks[index + 1].setAttribute("style", "display: none;");

    //   // object_tasks_list.slice(index);
    //   // all_tasks_array.slice(index);
    //   console.log("index to delete at object_tasks_list", index);
    //   console.log("index to delete at object_tasks_list", index);
    //   // console.log(
    //   //   "index to delete at all_tasks_array",
    //   //   object_tasks_list.indexOf(task) + 1
    //   // );

    //   object_tasks_list.splice(index, 1);
    //   all_tasks[index + 1].remove();
    //   all_tasks_array.splice(index + 1, 1);
    //   // all_tasks.pop(index);
    //   // all_tasks.pop(index);
    // } else {
    //   // console.log(tasksCtr[index + 1]);
    //   // all_tasks[index + 1].setAttribute("style", "display: flex;");
    //   ctr2++;
    //   console.log("ctr2", ctr2);
    // }
  });

  console.log("clear all button trigger");
  console.log("//////////////////////////////////////////");
  console.log("start \n");
  console.log("object_tasks_list", object_tasks_list);
  console.log("copy_array", copy_array);
  console.log("all_tasks", all_tasks);
  console.log("all_tasks_array", all_tasks_array);
  console.log("//////////////////////////////////////////");

  // console.log("object_tasks_list", object_tasks_list);
  // console.log("all_tasks_array", all_tasks_array);
  // tasks_ctr.textContent = `${x.length} items left`;
  tasks_ctr.textContent = `${copy_array.length} items left`;
});

//

//end of adding event listeners

//white mode

let mode_button = document.querySelector("#mode");
console.log(mode_button.src);
let bkgnd_img = document.querySelector("#bg-desktop-img");
let bkgnd_clr = document.querySelector("body");
let task_clr = document.querySelector(".task");
let all_section_task_clr = document.querySelectorAll("#all-tasks .task");
let all_section_task_clr_array = Array.from(all_section_task_clr);
let input_text_clr = document.querySelector("#add-new-task-text");
mode_button.addEventListener("click", function () {
  mode_button.setAttribute("src", "./images/icon-moon.svg");
  bkgnd_img.setAttribute("src", "./images/bg-desktop-light.jpg");
  bkgnd_clr.setAttribute("style", "background-color:hsl(0, 0%, 98%)");
  task_clr.setAttribute("style", "background-color:hsl(0, 0%, 98%)");
  all_section_task_clr_array.map((task) => {
    task.setAttribute("style", "background-color:hsl(0, 0%, 98%)");
  });
  input_text_clr.setAttribute("style", "color:hsl(235, 24%, 19%)");
  // all_section_task_clr.setAttribute(
  //   "style",
  //   "background-color:hsl(0, 0%, 98%)"
  // );
});
mode_button.addEventListener("dblclick", function () {
  mode_button.setAttribute("src", "./images/icon-sun.svg");
  bkgnd_img.setAttribute("src", "./images/bg-desktop-dark.jpg");
  bkgnd_clr.setAttribute("style", " background-color:hsl(235, 21%, 11%);");
  task_clr.setAttribute("style", "background-color:hsl(235, 24%, 19%);");
  all_section_task_clr_array.map((task) => {
    task.setAttribute("style", "background-color:hsl(235, 24%, 19%)");
  });
  input_text_clr.setAttribute("style", "color:white");
});
// function myFunction() {
//   if (document.getElementById("mode").src == "icon-moon.svg") {
//     document.getElementById("mode").src = "icon-sun.svg";
//   } else if (document.getElementById("mode").src == "icon-moon.svg") {
//     document.getElementById("mode").src = "icon-sun.svg";
//   }
// }

// mode_button.addEventListener("click", myFunction);

// mode_button.addEventListener("dblclick", function () {
//   mode_button.setAttribute("src", "./images/icon-sun.svg");
// });
