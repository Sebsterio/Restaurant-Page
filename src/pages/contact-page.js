export default function buildContactPage() {
	const content = document.createElement("div");
	content.classList.add("page-wrapper");
	content.innerHTML = `
  <p> contact form and info here... </p>
  `;
	return content;
}
