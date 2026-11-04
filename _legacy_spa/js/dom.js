/* DOM helpers */

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return [...document.querySelectorAll(selector)];
}

function createSlot(key, label) {
  const el = document.createElement("div");
  el.className = "ph";
  el.dataset.i = key;
  el.dataset.l = label;
  return el;
}
