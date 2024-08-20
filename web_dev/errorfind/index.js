const accordionData = [
  { title: "List 1", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ea quidem aperiam quasi voluptas provident quam dolorem nostrum." },
  { title: "List 2", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ea quidem aperiam quasi voluptas provident quam dolorem nostrum." },
  { title: "List 3", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ea quidem aperiam quasi voluptas provident quam dolorem nostrum." },
  { title: "List 4", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ea quidem aperiam quasi voluptas provident quam dolorem nostrum." },
  { title: "List 5", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ea quidem aperiam quasi voluptas provident quam dolorem nostrum." }
];

const accordionContainer = document.querySelector(".accordion");

accordionData.forEach((item) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");
  titleDiv.textContent = item.title;

  const icon = document.createElement("i");
  icon.classList.add("icon", "fa-solid", "fa-caret-down");

  questionDiv.appendChild(titleDiv);
  questionDiv.appendChild(icon);

  const answerDiv = document.createElement("div");
  answerDiv.classList.add("answer");
  answerDiv.textContent = item.content;

  accordionContainer.appendChild(questionDiv);
  accordionContainer.appendChild(answerDiv);

  questionDiv.addEventListener("click", () => {
    icon.classList.toggle("active");
    answerDiv.classList.toggle("active");
  });
});
