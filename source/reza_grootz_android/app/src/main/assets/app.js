let count = 0;
const btn = document.getElementById("tap");
const out = document.getElementById("count");

btn?.addEventListener("click", () => {
  count += 1;
  out.textContent = count.toLocaleString("fa-IR") + " بار";
});
