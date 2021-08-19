let faqOne = document.querySelector(".faq-1");
let hiddenParaOne = document.querySelector(".hidden-para-1");
let questionOne = document.querySelector(".question-1");

let faqTwo = document.querySelector(".faq-2");
let hiddenParaTwo = document.querySelector(".hidden-para-2");
let questionTwo = document.querySelector(".question-2");

let faqThree = document.querySelector(".faq-3");
let hiddenParaThree = document.querySelector(".hidden-para-3");
let questionThree = document.querySelector(".question-3");

let faqFour = document.querySelector(".faq-4");
let hiddenParaFour = document.querySelector(".hidden-para-4");
let questionFour = document.querySelector(".question-4");

let faqFive = document.querySelector(".faq-5");
let hiddenParaFive = document.querySelector(".hidden-para-5");
let questionFive = document.querySelector(".question-5");




faqOne.addEventListener("click", () => {
    if (hiddenParaOne.hasAttribute("id", "unhidden-para-1")){
        hiddenParaOne.removeAttribute("id");
        questionOne.removeAttribute("id");
    } else {
        hiddenParaOne.setAttribute("id", "unhidden-para-1");
        questionOne.setAttribute("id", "question-bold");
    };
});

faqTwo.addEventListener("click", () => {
    if (hiddenParaTwo.hasAttribute("id", "unhidden-para-2")){
        hiddenParaTwo.removeAttribute("id");
        questionTwo.removeAttribute("id");
    } else {
        hiddenParaTwo.setAttribute("id", "unhidden-para-2");
        questionTwo.setAttribute("id", "question-bold");
    };
});

faqThree.addEventListener("click", () => {
    if (hiddenParaThree.hasAttribute("id", "unhidden-para-3")){
        hiddenParaThree.removeAttribute("id");
        questionThree.removeAttribute("id");
    } else {
        hiddenParaThree.setAttribute("id", "unhidden-para-3");
        questionThree.setAttribute("id", "question-bold");
    };
});

faqFour.addEventListener("click", () => {
    if (hiddenParaFour.hasAttribute("id", "unhidden-para-4")){
        hiddenParaFour.removeAttribute("id");
        questionFour.removeAttribute("id");
    } else {
        hiddenParaFour.setAttribute("id", "unhidden-para-4");
        questionFour.setAttribute("id", "question-bold");
    };
});

faqFive.addEventListener("click", () => {
    if (hiddenParaFive.hasAttribute("id", "unhidden-para-5")){
        hiddenParaFive.removeAttribute("id");
        questionFive.removeAttribute("id");
    } else {
        hiddenParaFive.setAttribute("id", "unhidden-para-5");
        questionFive.setAttribute("id", "question-bold");
    };
});