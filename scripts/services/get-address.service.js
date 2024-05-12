export async function getAdress(cep) {
	const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

	const data = await request.json();

	return {
		cep: data.cep,
		city: data.localidade,
		uf: data.uf,
		neighborhood: data.bairro,
		address: data.logradouro
	}
}
