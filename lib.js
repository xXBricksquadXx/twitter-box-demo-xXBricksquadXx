/* form is grabbed from the document */ /* queryselector 1st span */

const form = document.querySelector("form");
const span = form.querySelector("span");

/* Object */
export default {
  button: form.querySelector("button"),
  charCountSpan: span.querySelector("span"),
  textarea: form.querySelector("textarea"),
};
