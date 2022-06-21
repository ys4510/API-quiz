"use strict";

{
  (() => {
    // Source: https://opentdb.com/
    // Generated API: https://opentdb.com/api.php?amount=10&type=multiple

    const API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";

    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const quizListContainer = document.getElementById("quiz-list");
        data.results.forEach((quiz, index) => {
          const numTitleItem = document.createElement("li");
          numTitleItem.textContent = `${index + 1}: Quiz Data`;
          quizListContainer.appendChild(numTitleItem);

          const quizDataList = buildQuizList(quiz);
          numTitleItem.append(quizDataList);
        });
      });

    //   Add Quiz data into ul element
    const buildQuizList = (quiz) => {
      const quizContainer = document.createElement("ul");
      for (const prop in quiz) {
        const item = document.createElement("li");
        item.innerHTML = `<strong>${prop}</strong> : ${quiz[prop]}`;
        quizContainer.appendChild(item);
      }

      return quizContainer;
    };
  })();
}
