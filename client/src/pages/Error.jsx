import { useRouteError } from "react-router-dom";

const Error = () => {

	const error = useRouteError()
	console.log(error);

	return (
		<div>
			<h2>{error.status} - {error.statusText}</h2>
			<h4>{error.data}</h4>
		</div>
	);
};

export default Error;