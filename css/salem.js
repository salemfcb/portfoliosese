const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️'; // إظهار أيقونة الشمس عند الوضع المظلم
    } else {
        themeToggle.textContent = '🌙'; // إظهار أيقونة القمر عند الوضع العادي
    }
});
