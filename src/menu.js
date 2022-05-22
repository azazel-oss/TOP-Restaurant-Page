export default function pageLoadMenu() {
  const contentEl = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "We have delicious recipes";
  contentEl.appendChild(heading);

  const specialItem = document.createElement("div");
  specialItem.textContent = "Today's special: Cinnamon rolls";
  contentEl.appendChild(specialItem);
}
