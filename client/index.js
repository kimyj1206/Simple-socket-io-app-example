const socket = io('ws://localhost:8080');

// server -> client data received
socket.on('message', (text) => {
  const element = document.createElement('li');
  element.innerHTML = text;
  document.querySelector('ul').appendChild(element);
});

// button click => input에 적은 value(=text)가 server로 send
document.querySelector('button').onclick = () => {
  const text = document.querySelector('input').value;
  socket.emit('message', text);
};