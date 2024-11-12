const items = document.querySelectorAll(".about-content, .faq-content");

items.forEach(item => {
  const question = item.querySelector(".quest, .q");
  const answer = item.querySelector(".answer, .a");

  question.addEventListener("click", () => {
    // Toggle the 'open' class on the answer
    answer.classList.toggle("open");

    // Close all other answers
    items.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector(".answer, .a").classList.remove("open");
      }
    });
  });
});


let faqItems = document.querySelectorAll(".faq-content");

const onClickFaq = (e) => {
  const answer = e.currentTarget.querySelector(".a");
  const symbol = e.currentTarget.querySelector(".toggle-symbol");

  // Close all other answers
  faqItems.forEach(item => {
    const itemAnswer = item.querySelector(".a");
    const itemSymbol = item.querySelector(".toggle-symbol");
    if (itemAnswer !== answer) {
      itemAnswer.style.display = "none";
      itemSymbol.textContent = "+";
    }
  });

  // Toggle the clicked answer
  if (answer.style.display === "none" || answer.style.display === "") {
    answer.style.display = "block";
    symbol.textContent = "-";
  } else {
    answer.style.display = "none";
    symbol.textContent = "+";
  }
};

faqItems.forEach(item => {
  item.addEventListener("click", onClickFaq);
});
