export default function buildMainPage() {
	const content = document.createElement("div");
	content.innerHTML = `
  <h1> Welcome to our restaurant! </h1>
  `;
	return content;
}
