const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');
  const taskTextElement = document.createElement('span');
  taskTextElement.textContent = taskText;
  listItem.appendChild(taskTextElement);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);

  taskInput.value = '';
}

taskList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'LI') {
    target.classList.toggle('completed');
  }
});

taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
const form = document.getElementById('registration-form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', function (e) {
  let isValid = true;

  if (usernameInput.value.trim() === '') {
    isValid = false;
    usernameError.textContent = 'Имя пользователя обязательно';
  } else {
    usernameError.textContent = '';
  }

  if (emailInput.value.trim() === '') {
    isValid = false;
    emailError.textContent = 'Email обязателен';
  } else {
    emailError.textContent = '';
  }

  if (passwordInput.value.trim() === '') {
    isValid = false;
    passwordError.textContent = 'Пароль обязателен';
  } else {
    passwordError.textContent = '';
  }

  if (!isValid) {
    e.preventDefault(); // Остановка отправки формы, если есть ошибки
  }
});
const durationInput = document.getElementById('duration');
const startButton = document.getElementById('start-timer');
const countdownDisplay = document.getElementById('countdown');

let countdown;
let isRunning = false;

startButton.addEventListener('click', () => {
  if (!isRunning) {
    startTimer(durationInput.value);
    isRunning = true;
  }
});

function startTimer(duration) {
  let start = Date.now();
  let end = start + duration * 1000;

  function updateCountdown() {
    const now = Date.now();
    const timeLeft = end - now;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      isRunning = false;
      return;
    }

    displayCountdown(timeLeft);
  }

  function displayCountdown(timeLeft) {
    const seconds = Math.floor(timeLeft / 1000);
    countdownDisplay.textContent = seconds;
  }

  countdown = setInterval(updateCountdown, 1000);
  updateCountdown();
}
// page navigator 
const pagination = document.querySelector(".pagination");
const pages = pagination.querySelectorAll(".page-link");

const containers = document.querySelectorAll(".container");
let currentPage = 0;

function showPage(pageNumber) {
  containers.forEach((container, index) => {
    if (index === pageNumber) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
}

function updateActivePageLink() {
  pages.forEach((page, index) => {
    page.classList.remove("active");
    if (index === currentPage) {
      page.classList.add("active");
    }
  });
}

function navigateToPage(pageNumber) {
  currentPage = pageNumber;
  showPage(currentPage);
  updateActivePageLink();
}

pages.forEach((page, index) => {
  page.addEventListener("click", () => {
    if (index === 0) {
      if (currentPage > 0) {
        navigateToPage(currentPage - 1);
      }
    } else if (index === pages.length - 1) {
      if (currentPage < containers.length - 1) {
        navigateToPage(currentPage + 1);
      }
    } else {
      navigateToPage(index);
    }
  });
});

showPage(currentPage);
updateActivePageLink();
