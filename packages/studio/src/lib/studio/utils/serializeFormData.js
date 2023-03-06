export function serializeFormData(data) {
    let obj = {};

	for (let key of data.keys()) {
		obj[key] = data.get(key);
	}

	return obj;
}
