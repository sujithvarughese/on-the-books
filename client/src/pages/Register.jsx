import classes from "./styles/Register.module.css";
import { Input, Form, Button } from "../UI";
import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext.jsx";

const initialState = {
	lastName: "",
	firstName: "",
	email: "",
	password: ""
}

const Register = () => {

	const [values, setValues] = useState(initialState)
	const { register } = useGlobalContext()

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		register(values)
		setValues(initialState)
	}

	return (
		<div className={classes.register}>
			<Form onSubmit={handleSubmit} title="Register">
				<Input
					htmlFor="lastName"
					label="Last Name: "
					type="text"
					name="lastName"
					value={values.lastName}
					onChange={handleChange}
				></Input>
				<Input
					htmlFor="firstName"
					label="First Name: "
					type="text"
					name="firstName"
					value={values.firstName}
					onChange={handleChange}
				></Input>
				<Input
					htmlFor="email"
					label="Email: "
					type="email"
					name="email"
					value={values.email}
					onChange={handleChange}
				></Input>
				<Input
					htmlFor="password"
					label="Password: "
					type="password"
					name="password"
					value={values.password}
					onChange={handleChange}
				></Input>
				<div className={classes.btn}>
					<Button type="submit">Create Account</Button>
				</div>

			</Form>
		</div>

	);
};
export default Register;