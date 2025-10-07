function showEmail() {
  document.getElementById('email').textContent = 'maria.santos@example.com';
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const btn = document.querySelector('.dark-toggle');
  if (document.body.classList.contains('dark-mode')) {
    btn.textContent = '☀️ Light Mode';
  } else {
    btn.textContent = '🌙 Dark Mode';
  }
}
