export function insertDataInLocalStorage(data, name) {
	const data_in_local_storage = getDataFromLocalStorage(name);
	console.log(data_in_local_storage);
	const data_for_insert = returnDataArrayToInsertInLocalStorage(data, data_in_local_storage);
	console.log(data_for_insert)
	localStorage.setItem(name, JSON.stringify(data_for_insert));
}

export function getDataFromLocalStorage(name) {
	const data = localStorage.getItem(name);
	return data ? JSON.parse(data) : [];
}

function returnDataArrayToInsertInLocalStorage(new_data, datas) {
	const datas_for_insert = [new_data];
	if (datas.length > 0) {
		datas_for_insert.push(...datas);
	}
	else if (datas.length === 0) {
		return datas_for_insert;
	}
	else {
		datas_for_insert.push(datas);
	}

	return datas_for_insert;
}
