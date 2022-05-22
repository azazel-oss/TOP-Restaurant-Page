import RestaurantImage from "./istockphoto-1295387240-170667a.jpg";

export default function pageLoadHome() {
  const contentEl = document.getElementById("content");

  const heading = document.createElement("h1");
  heading.textContent = "Asad's Restaurant";
  contentEl.appendChild(heading);

  const image = new Image();
  image.src = RestaurantImage;
  contentEl.appendChild(image);
}
