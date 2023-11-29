document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    generateQuote();
  });

function generateQuote() {
  // Получаем все элементы с классом 'text'
  const textElements = document.querySelectorAll(".text");

  // Выбираем случайный индекс элемента
  const randomIndex = Math.floor(Math.random() * (textElements.length - 1));

  // Получаем два предложения из выбранного элемента
  const quoteText = getTwoConsecutiveSentences(textElements[randomIndex]);

  function getTwoConsecutiveSentences(element) {
    const sentences = element.textContent
      .replace(/\(\d+\)/g, "")
      .split(/[.!?]/)
      .filter(function (sentence) {
        return sentence.trim() !== "";
      });

    // Удаляем два последних предложения (Будь Здоров. Письмо номер)
    sentences.length = sentences.length - 2;

    // Выбираем случайный индекс предложения
    const randomIndex = Math.floor(Math.random() * (sentences.length - 1));

    // Получаем два идущих друг за другом предложения
    const firstSentence = sentences[randomIndex] + ".";
    const secondSentence = sentences[randomIndex + 1] + ".";

    // Возвращаем объединенный текст двух предложений
    return firstSentence + " " + secondSentence;
  }

  // Устанавливаем текст цитаты
  document.getElementById("quote").textContent = quoteText;

  // Получаем соответствующий контент из span с классом 'text__source'
  const sourceText =
    textElements[randomIndex].querySelector(".text__source").textContent;

  // Устанавливаем текст подписи цитаты
  document.getElementById("source").textContent = sourceText;
}
