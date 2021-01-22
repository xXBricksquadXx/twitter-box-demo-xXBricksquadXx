/* form is grabbed from the document */ /* queryselector 1st span */

const form = document.querySelector("form");
const span = form.querySelector("span");

/* Object */
export const dom = {
  button: form.querySelector("button"),
  charCountSpan: span.querySelector("span"),
  span, // short hand for span:span
  textarea: form.querySelector("textarea"),
};

export const toggleButton = (count) => {
  if (count) {
    dom.button.disabled = false;
  } else {
    dom.button.disabled = true;
  }
};

export const toggleCharCountError = (count) => {
  if (count > 140) {
    dom.span.classList.add("is-error");
  } else {
    dom.span.classList.remove("is-error");
  }
};
