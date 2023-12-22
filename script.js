// For the chat bot
function toggleChat() {
  var chatContainer = document.getElementById('chatContainer');
  chatContainer.style.display = (chatContainer.style.display === 'none' || chatContainer.style.display === '') ? 'block' : 'none';
}
// For opening the Answers when clicked on FAQ container
function toggleAnswer(questionId) {
  var answer = document.getElementById(questionId);
  answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
}