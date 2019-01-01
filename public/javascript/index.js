const input     = document.getElementById('input'),
      submit    = document.getElementById('submit'),
      messages  = document.getElementById('messages'),
      socket    =  io();

let username = '';

const checkUsername = () => {
  while (username.length <= 0) {
    username = prompt('Please enter your name').trim();
    if (username.length > 30) {
      alert('That name is too long. Please choose a shorter name.')
      username = '';
    }
  }
};

checkUsername();

const appendChatMessages = (msg) => {
  const chatMessage = document.createElement('span'),
        name        = document.createElement('span'),
        li          = document.createElement('li');
  name.classList.add('user-name');
  chatMessage.classList.add('user-message');
  name.innerText = `${msg.user}: `;
  chatMessage.innerText = `${msg.message}`;
  li.appendChild(name);
  li.appendChild(chatMessage);
  messages.appendChild(li);
}

const sendChatMessage = (e) => {
  e.preventDefault();
  if (!input.value) return;

  const message = { user: username, message: input.value }
  socket.emit('chat message', message);
  input.value = '';
}

submit.addEventListener('click', sendChatMessage);

socket.on('chat message', msg => appendChatMessages(msg));