const prod = {
	url: {
		API_URL: "https://jungle-green-pig-gown.cyclic.app/api/v1"
	}
};

const dev = {
	url: {
		API_URL: "http://localhost:8800/api/v1"
	}
};

export const config =
	process.env.NODE_ENV === "development" ? dev : prod;