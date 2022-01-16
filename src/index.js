const btns = document.querySelectorAll(".collapsible__toggler");
const questions = document.querySelectorAll(".question");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    questions.forEach(function (item) {
      if (item !== question) {
        // Compares array index
        item.classList.remove("collapsible--expanded");
      }
    });
    question.classList.toggle("collapsible--expanded");
  });
});
