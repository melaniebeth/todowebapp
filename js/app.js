document.getElementById('form-Task').addEventListener('submit', saveTask);


////Save Task
////Reset Form
////Delete Task
////Show Task

// Save Task
function saveTask(e) {
 
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
 
 
  let task = {
    title,
    description
  };
 
  if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  getTasks();
 
// Reset Task Form
  document.getElementById('form-Task').reset();
  e.preventDefault();
 
}
 
// Delete Task
function deleteTask(title) {
 
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
 
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

ldclient.on('ready', getTasks);
ldclient.on('change', getTasks);

// Show Task List
function getTasks() {
 
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  //Adding our new feature, a SORT
  sortFlagValue = ldclient.variation('AutoSort', false);
 
  if (sortFlagValue)
  {
    tasks.sort(function(a, b) {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;});
  }

  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
 
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
 
    tasksView.innerHTML +=
      `<div class="card mb-3">
        <div class="card-body">
        <div class="row">
          <div class="col-sm-3 text-left">
            <p>${title}</p>
          </div>
          <div class="col-sm-7 text-left">
            <p>${description}</p>
          </div>
          <div class="col-sm-2 text-right">
            <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">X</a>
          </div>
        </div>  
       </div>
      </div>`;
  }
}
 
//getTasks();