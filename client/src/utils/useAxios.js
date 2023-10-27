import axios from "axios"
import { config } from "./constants.js"
import { useEffect, useState } from "react";

const useAxios = ({ url, method, headers="application/json", body=null }) => {

	const [response, setResponse] = useState("")
	const [error, setError] = useState("");

	const fetchData = async () => {
		try {
			const fetchResponse = await axios[method](url, headers, body)
			setResponse(fetchResponse)
		} catch (fetchError) {
			setError(fetchError)
		}
	}

	useEffect(() => {
		fetchData()
	}, [url, method])

	return { response, error }

}

export default useAxios