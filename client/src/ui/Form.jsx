import styled from "styled-components";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
`
const Title = styled.div`
	font-weight: 400;
	font-size: 28px;
	text-align: center;
`
const Form = ({ title, ...props }) => {
	return (
		<StyledForm {...props}>
			{title && <Title>{title}</Title>}
			{props.children}
		</StyledForm>
	)
}

export default Form;