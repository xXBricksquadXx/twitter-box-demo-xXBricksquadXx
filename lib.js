/* form is grabbed from the document */ /* queryselector 1st span */

const form = document.querySelector("form");
const span = form.querySelector("span");

/* Object */
export default {
  button: form.querySelector("button"),
  charCount: span.querySelector("span"),
  textarea: form.querySelector("textarea"),
};
