// destructure dom

import { dom, toggleButton, toggleCharCountError } from "./lib.js";

dom.textarea.addEventListener("keyup", function handleTextarea() {
  const charCount = this.value.length;

  dom.charCountSpan.innerText = charCount;
  toggleButton(charCount);
  toggleCharCountError(charCount);
});
