import classes from "./styles/Auth.module.css";
import {Input, Form, Button, Card, AuthCard} from "../../ui/index.js";
import { useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext.jsx";

const initialState = {
	lastName: "",
	firstName: "",
	email: "",
	password: ""
}

const Register = () => {

	const [values, setValues] = useState(initialState)
	const { register, setAuthState } = useGlobalContext()

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		register(values)
		setValues(initialState)
		setAuthState("")
	}

	return (
		<AuthCard closeFn={()=>setAuthState("")}>
			<div className={classes.content}>
				<Form onSubmit={handleSubmit} title="Register" color="black">
					<div className={classes.form}>
						<Input
							htmlFor="lastName"
							placeholder="Last Name"
							type="text"
							name="lastName"
							value={values.lastName}
							onChange={handleChange}
							backgroundColor="var(--COLOR-BACKGROUND)"
						></Input>
						<Input
							htmlFor="firstName"
							placeholder="First Name"
							type="text"
							name="firstName"
							value={values.firstName}
							onChange={handleChange}
							backgroundColor="var(--COLOR-BACKGROUND)"
						></Input>
						<Input
							htmlFor="email"
							placeholder="Email Address"
							type="email"
							name="email"
							value={values.email}
							onChange={handleChange}
							backgroundColor="var(--COLOR-BACKGROUND)"
						></Input>
						<Input
							htmlFor="password"
							placeholder="Password"
							type="password"
							name="password"
							value={values.password}
							onChange={handleChange}
							backgroundColor="var(--COLOR-BACKGROUND)"
						></Input>
					</div>
					<div className={classes.button}>
						<Button type="submit">Register</Button>
					</div>
				</Form>
			</div>
		</AuthCard>

	);
};
export default Register;