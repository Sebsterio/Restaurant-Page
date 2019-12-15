import buildMainPage from "./pages/main-page";
import buildMenuPage from "./pages/menu-page";
import buildContactPage from "./pages/contact-page";

const navLinks = document.querySelectorAll("#main-nav li");
const mainContent = document.getElementById("main-content");

function renderPage(target) {
	let content;
	switch (target) {
		case "home":
			content = buildMainPage();
			break;
		case "menu":
			content = buildMenuPage();
			break;
		case "contact":
			content = buildContactPage();
			break;
	}
	mainContent.innerHTML = "";
	mainContent.appendChild(content);
}

navLinks.forEach(link => {
	const targetPage = link.dataset.target;
	link.addEventListener("click", () => renderPage(targetPage));
});
