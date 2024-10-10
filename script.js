const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Load messages from local storage
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(message => {
        displayMessage(message);
    });
}

// Display a message
function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Send message
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        displayMessage(message);
        saveMessage(message);
        messageInput.value = ''; // Clear input
    }
});

// Save message to local storage
function saveMessage(message) {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

// Initial load
loadMessages();
