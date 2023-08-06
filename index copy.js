const tasks_list = ["task1", "task2", "task3", "task4", "task5"];

const all_tasks = document.querySelectorAll(".task");
const add_new_task = all_tasks[0];
const all_tasks_section = document.querySelector("#all-tasks");
const x_buttons = document.querySelectorAll(".x_button");
const checkboxes_label = document.querySelectorAll("label");
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const task_p = document.querySelectorAll(".task p");

let timer;
const waitTime = 1000;
const input_text = document.querySelector("input[type='text']");
console.log(input_text);

// input_text.addEventListener("input", function updateValue(e) {
//   console.log(e.target.value);
// });

//with placeholders activated
input_text.addEventListener("keyup", (event) => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    doneTyping(event.target.value);
  }, waitTime);
});

function doneTyping(value) {
  console.log(`The user is done typing: ${value}`);
  tasks_list.unshift(value);
  console.log(tasks_list);
}

// console.log(input_text.value);

console.log(all_tasks); //+1 cuz create
console.log(x_buttons); //start from 0
console.log(add_new_task);
console.log(checkboxes); //+1 cuz create
console.log(checkboxes_label); //+1 cuz create
console.log(task_p); //start from 0
console.log(all_tasks_section); //start from 0

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

// <div class="task">
//     <input type="checkbox" id="checkbox1">
//     <label for="checkbox1"></label>
//     <p>aaaaaaaaa</p>
//     <button class="x_button"><img src="./images/icon-cross.svg"></button>
//   </div>

//not interactive

// for (let i = 1; i < tasks_list.length + 1; i++) {
//   let a = document.createElement("div");
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
//   total += a;
//   all_tasks_section.appendChild(a);
// }
//interactive

//start i from 1 cuz add new task = 0 , length-1 beacuse of last task elemen doesnt have checkbox
for (let i = 1; i < all_tasks.length - 1; i++) {
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
    } else {
      task_p[i - 1].setAttribute("style", "text-decoration: none;");
    }
  });

  //   task_p[i - 1].textContent = tasks_list[i - 1];
}
