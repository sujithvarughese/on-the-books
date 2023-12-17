import classes from "./styles/Auth.module.css";
import { useState } from "react";
import { Form, Input, Button, Card } from "../../ui/index.js"
import { useGlobalContext } from "../../context/GlobalContext.jsx";

const initialState = {
	email: "",
	password: ""
}

const Login = () => {

	const [values, setValues] = useState(initialState)
	const { login } = useGlobalContext()

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		login(values)
		setValues(initialState)
	}

	return (
		<div className={classes.container}>
			<div className={classes.content}>

					<Form onSubmit={handleSubmit} title="Login">
						<div className={classes.form}>
							<Input
								htmlFor="email"
								placeholder="Email"
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
							<Button type="submit">Login</Button>
						</div>
					</Form>


			</div>
		</div>

	);
};


export default Login;