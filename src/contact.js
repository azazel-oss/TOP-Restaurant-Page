export default function pageLoadContact() {
  const contentEl = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Contact the community";
  contentEl.appendChild(heading);

  const details = document.createElement("div");
  details.textContent = "Asad Mahmood @ London";
  contentEl.appendChild(details);
}
