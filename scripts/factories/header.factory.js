import { headerData } from "../data/header.data.js";

document.getElementById("root").addEventListener("load", makeHeader());

function makeHeader() {
	const header = document.createElement("header");
	header.classList.add("header");
	document.getElementById("root").insertBefore(header, document.getElementById("root").firstChild);

	const logo_div = document.createElement("div");
	logo_div.classList.add("logo-container");

	const logo = document.createElement("img");
	logo.src = headerData.logo;

	const title = document.createElement("a");
	title.href = headerData.title.href;
	title.innerText = headerData.title.label;

	logo_div.appendChild(logo);
	logo_div.appendChild(title);


	const nav = document.createElement("nav");

	header.appendChild(logo_div);
	header.appendChild(nav);

	const nav_list = document.createElement("ul");
	nav_list.classList.add("nav-list");

	nav.appendChild(nav_list);

	headerData.links.forEach(link => {
		const item = document.createElement("li");

		const link_item = document.createElement("a");
		link_item.href = link.href;
		link_item.innerText = link.label;

		item.appendChild(link_item);
		nav_list.appendChild(item);
	});
}
