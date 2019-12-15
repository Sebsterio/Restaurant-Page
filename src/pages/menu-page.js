import { menu } from "../database";

export default function buildMenuPage() {
	let content = document.createElement("div");
	content.classList.add("page-wrapper");
	let menuTable = document.createElement("table");

	// populate table with data from `menu`
	for (let i = 0; i < menu.length; i++) {
		const row = document.createElement("tr");
		for (const prop in menu[i]) {
			const cell = document.createElement("td");
			cell.innerHTML = menu[i][prop];
			row.appendChild(cell);
		}
		menuTable.appendChild(row);
	}
	content.appendChild(menuTable);

	return content;
}
