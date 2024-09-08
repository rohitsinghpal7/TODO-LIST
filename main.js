document.addEventListener('DOMContentLoaded', function() {
     const taskInput = document.getElementById('taskInput');
     const addTaskBtn = document.getElementById('addTaskBtn');
     const taskList = document.getElementById('taskList');
 
     function addTask() {
         const taskText = taskInput.value.trim();
         if (taskText) {
             const li = document.createElement('li');
             li.textContent = taskText;
 
             const deleteBtn = document.createElement('button');
             deleteBtn.textContent = 'Delete';
             deleteBtn.className = 'delete';
             deleteBtn.addEventListener('click', function() {
                 taskList.removeChild(li);
             });
 
             li.appendChild(deleteBtn);
             taskList.appendChild(li);
             taskInput.value = '';
         }
     }
 
     addTaskBtn.addEventListener('click', addTask);
 
     taskInput.addEventListener('keypress', function(event) {
         if (event.key === 'Enter') {
             addTask();
         }
     });
 });