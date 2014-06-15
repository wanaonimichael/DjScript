document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.getElementById('assistant-chat');
  chatContainer.innerHTML = `
    <div id="chat-box">
      <div id="messages"></div>
      <input type="text" id="user-input" placeholder="Ask a question...">
      <button onclick="sendMessage()">Send</button>
    </div>
  `;

  window.sendMessage = function() {
    const input = document.getElementById('user-input');
    const message = input.value;
    const messages = document.getElementById('messages');

    // Display user's message
    const userMessage = document.createElement('p');
    userMessage.textContent = `User: ${message}`;
    messages.appendChild(userMessage);

    // Placeholder for AI response
    const aiMessage = document.createElement('p');
    aiMessage.textContent = `AI: [Response from Copilot here]`;
    messages.appendChild(aiMessage);

    input.value = '';
  };
});