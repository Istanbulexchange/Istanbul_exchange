
const langToggle = document.getElementById('langToggle');
langToggle && langToggle.addEventListener('click', () => {
    document.querySelectorAll('[data-fa]').forEach(el => {
        if(el.innerHTML === el.getAttribute('data-fa')) el.innerHTML = el.getAttribute('data-en');
        else el.innerHTML = el.getAttribute('data-fa');
    });
});
