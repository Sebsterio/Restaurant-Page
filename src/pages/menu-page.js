import { menu as menuData } from "../database";

//
function buildTableRow(data, cellType) {
	const row = document.createElement("tr");

	for (let i = 0; i < data.length; i++) {
		const cell = document.createElement(cellType);
		cell.innerHTML = data[i];
		row.appendChild(cell);
	}

	return row;
}

//
function buildTable(dataset) {
	const menuTable = document.createElement("table");

	// build table head
	const tableHead = document.createElement("thead");
	const menuFields = Object.keys(dataset[0]);
	tableHead.appendChild(buildTableRow(menuFields, "th"));
	menuTable.appendChild(tableHead);

	// build table body
	const tableBody = document.createElement("tbody");
	for (let i = 0; i < dataset.length; i++) {
		const menuItem = Object.values(dataset[i]);
		tableBody.appendChild(buildTableRow(menuItem, "td"));
	}
	menuTable.appendChild(tableBody);

	return menuTable;
}

//
export default function buildMenuPage() {
	const content = document.createElement("div");
	const menuTable = buildTable(menuData);
	content.appendChild(menuTable);

	return content;
}
