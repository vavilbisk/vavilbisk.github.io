document.getElementById('play-button').addEventListener('click', function() {
    const video = document.getElementById('background-video');
    const overlay = document.getElementById('overlay');

    video.play(); // Запускаем видео
    video.muted = false; // Включаем звук
    video.volume = 0.05; // Устанавливаем громкость на 5%
    overlay.classList.add('hidden'); // Применяем класс для плавного исчезновения

    // Удаляем заглушку после завершения анимации
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500); // Время должно совпадать с продолжительностью анимации в CSS
});
