const input     = document.getElementById('input'),
      submit    = document.getElementById('submit'),
      messages  = document.getElementById('messages'),
      username  = prompt('what is your name?'),
      socket    =  io();

submit.addEventListener('click', e => {
  e.preventDefault();
  socket.emit('chat message', input.value);
  input.value = '';
});

socket.on('chat message', msg => {
  const message = `<li><strong>${username} says:</strong> ${msg}</li>`;
  messages.innerHTML += message;
});