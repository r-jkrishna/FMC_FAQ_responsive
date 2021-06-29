const ques = document.querySelectorAll(".q");

ques.forEach((q) => {
  q.addEventListener("click", (e) => {
    ques.forEach((qa) => {
      console.log(qa);
      if (qa != e.currentTarget) {
        qa.nextElementSibling.classList.remove("aO");
        qa.firstElementChild.classList.remove("qClick");
        qa.lastElementChild.classList.remove("up");
      }
    });
    e.currentTarget.nextElementSibling.classList.toggle("aO");
    e.currentTarget.firstElementChild.classList.toggle("qClick");
    e.currentTarget.lastElementChild.classList.toggle("up");
  });
});
