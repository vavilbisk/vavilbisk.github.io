const phrases = [
    "qq",
    "sudo vavilbisk.sh",
    "Loneliness? Sounds familiar...",
    "It's cold in here ❄️",
    "Themida? who is it?",
    "Так много вопросов и так мало ответов в этом мире!",
    "Иди к своей цели, путник.",
    "Очередной weekend 🍻",
    "Я сделал это и хочу ещё.",
    "Это просто баг."

];

const textElement = document.getElementById('text');
const cursorElement = document.getElementById('cursor');

textElement.textContent = "> "; // Устанавливаем начальный текст на '> '

function typeText(text, index = 0) {
    cursorElement.style.display = 'inline-block'; // Показать курсор
    if (index < text.length) {
        textElement.textContent += text.charAt(index); // Добавляем символ
        setTimeout(() => typeText(text, index + 1), 100); // Задержка между символами
    } else {
        setTimeout(() => {
            eraseText(text.length); // Начинаем стирать текст
        }, 1000);
    }
}

function eraseText(length) {
    const currentText = textElement.textContent;
    const textToErase = currentText.slice(2); // Удаляем текст, начиная со второго символа

    if (textToErase.length > 0) {
        textElement.textContent = currentText.slice(0, currentText.length - 1); // Удаляем последний символ
        cursorElement.style.display = 'inline-block'; // Показать курсор во время стирания
        setTimeout(() => eraseText(length), 50); // Уменьшена задержка между удалением символов
    } else {
        cursorElement.style.display = 'none'; // Скрыть курсор после полного удаления текста
        setTimeout(() => {
            const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
            textElement.textContent = "> "; // Возвращаем статичный текст на '> '
            typeText(randomPhrase); // Печатаем новую фразу
        }, 500);
    }
}

// Запускаем эффект с первой фразы
typeText(phrases[Math.floor(Math.random() * phrases.length)]);
