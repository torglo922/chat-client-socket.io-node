const input     = document.getElementById('input'),
      submit    = document.getElementById('submit'),
      messages  = document.getElementById('messages'),
      username  = prompt('what is your name?'),
      socket    =  io();

submit.addEventListener('click', e => {
  e.preventDefault();
  const message = `<li><strong>${username} says:</strong> ${input.value}</li>`;
  socket.emit('chat message', message);
  input.value = '';
});

socket.on('chat message', msg => {
  messages.innerHTML += msg;
});