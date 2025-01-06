// video.js

// Массив с путями к видео
const videos = [
    'video/video1.mp4',
    'video/video2.mp4',
    'video/video3.mp4',
    'video/video4.mp4',
    'video/video5.mp4',
    'video/video6.mp4'
];

// Функция для выбора случайного видео
function getRandomVideo() {
    return Math.floor(Math.random() * videos.length);
}

// Функция для установки видео
function setVideo() {
    const videoSource = document.getElementById('video-source');
    const videoElement = document.getElementById('background-video');

    // Выбираем случайное видео
    const randomIndex = getRandomVideo();
    videoSource.src = videos[randomIndex];

    // Перезагружаем видео с новым источником и запускаем воспроизведение
    videoElement.load(); 
    videoElement.play().catch(error => {
        console.error("Ошибка при воспроизведении видео:", error);
    });
}

// Устанавливаем видео при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    setVideo(); // Устанавливаем первое видео

    // Добавляем обработчик события на окончание видео
    const videoElement = document.getElementById('background-video');
    videoElement.addEventListener('ended', setVideo); // Устанавливаем случайное видео при окончании текущего
});
