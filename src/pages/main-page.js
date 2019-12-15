export default function buildMainPage() {
	const content = document.createElement("div");
	content.classList.add("page-wrapper");
	content.innerHTML = `
  <h1> Welcome to our restaurant! </h1>
  `;
	return content;
}
