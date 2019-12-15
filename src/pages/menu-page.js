import { menu } from "../database";

export default function buildMenuPage() {
	const content = document.createElement("div");
	content.classList.add("page-wrapper");
	const menuTable = document.createElement("table");

	// populate table with data from `menu`
	for (let i = 0; i < menu.length; i++) {
		const row = document.createElement("tr");
		const menuItem = Object.values(menu[i]);

		for (let j = 0; j < menuItem.length; j++) {
			const cell = document.createElement("td");
			cell.innerHTML = menuItem[j];
			row.appendChild(cell);
		}
		menuTable.appendChild(row);
	}
	content.appendChild(menuTable);

	return content;
}
