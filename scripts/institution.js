import { getDataFromLocalStorage, insertDataInLocalStorage } from "./services/local-storage.service.js";
import { getCitiesOfState } from "./services/get-cities.service.js";
import { getAdress } from "./services/get-address.service.js";
import { addTableData, clearTable } from "./handlers/table.handler.js";
import { getFormData } from "./handlers/form.handler.js"
import { addSelectOptions, clearSelect } from "./handlers/select.handler.js";
import { maskCep, unmaskCep } from "./utils/mask-cep.util.js";
import { maskCnpj, unmaskCnpj } from "./utils/mask-cnpj.util.js";

document.getElementById("body").addEventListener("load", loadInstitutionsInTable());
document.getElementById("cep").addEventListener("blur", getCepAndFillAddress);
document.getElementById("cep").addEventListener("focus", (e) => e.target.value = unmaskCep(e.target.value));
document.getElementById("cnpj").addEventListener("blur", (e) => e.target.value = maskCnpj(e.target.value));
document.getElementById("cnpj").addEventListener("focus", (e) => e.target.value = unmaskCnpj(e.target.value));
document.getElementById("state-selection").addEventListener("change", (e) => getStateAndFillCities(e.target.value));
document.getElementById("add_new_institution_button").addEventListener("click", showNewInstitutionForm);
document.getElementById("close_institution_popup").addEventListener("click", showNewInstitutionForm)
document.getElementById("create_institution_form").addEventListener("submit", createNewInstitution);

async function getCepAndFillAddress(event) {
	const address = await getAdress(event.target.value);

	document.getElementById("address").value = `${address.address}, ${address.neighborhood}`;
	document.getElementById("state-selection").value = address.uf;
	getStateAndFillCities(document.getElementById("state-selection").value);
	document.getElementById("city-selection").value = address.city;

	event.target.value = maskCep(event.target.value);
}

function showNewInstitutionForm() {
	const create_institution_popup = document.getElementById("create_institution_popup");
	const display = create_institution_popup.style.display;

	create_institution_popup.style.display = display === "none" ? "block" : "none";
}

function createNewInstitution(event) {
	event.preventDefault();
	const datas = getFormData(event.target);

	const formatted_data = {
		name: datas.name,
		companyName: datas.companyName,
		cnpj: datas.cnpj,
		grossIncome: `R$ ${Number(datas.grossIncome).toFixed(2)}`,
		foundationDate: new Date(datas.foundationDate).toLocaleDateString(),
		address: `${datas.address}, ${datas.addressNumber} | ${datas.city} - ${datas.state}, ${datas.cep}`,
	}

	insertDataInLocalStorage(formatted_data, "institutions");
	addTableData("institution-table", formatted_data);
	showNewInstitutionForm();
	document.getElementById("json-viewer").innerText = JSON.stringify(getDataFromLocalStorage("institutions"), null, "\t");
}

function loadInstitutionsInTable() {
	clearTable("institution-table");

	const institutions = getDataFromLocalStorage("institutions");
	if (institutions.length > 0) {
		institutions.forEach(institution => {
			addTableData("institution-table", institution);
		});
	}
	document.getElementById("json-viewer").innerText = JSON.stringify(getDataFromLocalStorage("institutions"), null, "\t");
}

function getStateAndFillCities(uf) {
	const cities = getCitiesOfState(uf);
	clearSelect("city-selection");
	addSelectOptions("city-selection", cities);
}
