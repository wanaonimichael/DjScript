document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.getElementById('assistant-chat');

  window.sendMessage = async function() {
    const input = document.getElementById('user-input');
    const message = input.value;
    const messages = document.getElementById('messages');

    if(!message.trim()) {
      return;
    }

    // Display user's message
    const userMessage = document.createElement('p');
    userMessage.textContent = `User: ${message}`;
    messages.appendChild(userMessage);

    try {
      const response = await fetch('/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: message })
      });

      const data = await response.json();
      
      const aiMessage = document.createElement('p');
      aiMessage.textContent = `AI: ${data.answer}`;
      messages.appendChild(aiMessage);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'AI: Sorry, something went wrong.';
      messages.appendChild(errorMessage);
    }

    input.value = '';
  };
});