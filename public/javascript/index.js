const input     = document.getElementById('input'),
      submit    = document.getElementById('submit'),
      messages  = document.getElementById('messages'),
      socket    =  io();

let username = '';

const checkUsername = (() => {
  while (username.length <= 0) {
    username = prompt('Please enter your name').trim();
    if (username.length > 30) {
      alert('That name is too long. Please choose a shorter name.')
      username = '';
    }
  }
})();

submit.addEventListener('click', e => {
  e.preventDefault();
  if (!input.value) return;
  let message = `<li><strong id='user'>${username}:</strong> ${input.value}</li>`;
  socket.emit('chat message', message);
  input.value = '';
});

socket.on('chat message', msg => {
  messages.innerHTML += msg;
});