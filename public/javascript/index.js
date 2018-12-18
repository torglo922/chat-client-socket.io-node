const input = document.getElementById('input');
const submit = document.getElementById('submit');
const messages = document.getElementById('messages');
const socket =  io();

let username = prompt('what is your name?');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  socket.emit('chat message', input.value);
  input.value = '';
});

socket.on('chat message', (msg) => {
  messages.innerHTML += `<li><strong>${username} says:</strong> ${msg}</li>`;
});