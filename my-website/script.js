// Small starter script
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const btn = document.getElementById('helloBtn');
  if (btn) btn.addEventListener('click', () => alert('Hello from script.js'));
});
