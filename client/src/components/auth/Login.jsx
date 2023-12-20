import classes from "./styles/Auth.module.css";
import { useState } from "react";
import {Form, Input, Button, Card, AuthCard} from "../../ui/index.js"
import { useGlobalContext } from "../../context/GlobalContext.jsx";

const initialState = {
	email: "",
	password: ""
}

const Login = () => {

	const [values, setValues] = useState(initialState)
	const { login, setAuthState } = useGlobalContext()

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		login(values)
		setValues(initialState)
		setAuthState("")
	}

	return (
		<AuthCard closeFn={()=>setAuthState("")}>
			<div className={classes.content}>
				<Form onSubmit={handleSubmit} title="Login" color="black">
					<div className={classes.form}>
						<Input
							htmlFor="email"
							placeholder="Email"
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
						<Button type="submit">Login</Button>
					</div>
				</Form>
			</div>
		</AuthCard>


	);
};


export default Login;