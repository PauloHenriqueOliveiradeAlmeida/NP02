import { states } from "../data/states.data.js";

export function getCitiesOfState(uf) {
	const { cities } = states.find(state => state.uf === uf);

	return cities;
}
