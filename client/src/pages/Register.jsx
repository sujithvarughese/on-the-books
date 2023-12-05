import classes from "./styles/Auth.module.css";
import { Input, Form, Button, Card } from "../ui";
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
		<div className={classes.container}>
			<div className={classes.content}>
				<Form onSubmit={handleSubmit} title="Register">
					<div className={classes.form}>
						<Input
							htmlFor="lastName"
							placeholder="Last Name"
							type="text"
							name="lastName"
							value={values.lastName}
							onChange={handleChange}
						></Input>
						<Input
							htmlFor="firstName"
							placeholder="First Name"
							type="text"
							name="firstName"
							value={values.firstName}
							onChange={handleChange}
						></Input>
						<Input
							htmlFor="email"
							placeholder="Email Address"
							type="email"
							name="email"
							value={values.email}
							onChange={handleChange}
						></Input>
						<Input
							htmlFor="password"
							placeholder="Password"
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
						></Input>
					</div>
					<div className={classes.button}>
						<Button type="submit">Create Account</Button>
					</div>
				</Form>
			</div>
		</div>

	);
};
export default Register;