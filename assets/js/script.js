const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Check if dark mode preference exists in localStorage
const darkMode = JSON.parse(localStorage.getItem('darkMode'));
if (darkMode) {
  body.classList.add('dark-mode');
}
