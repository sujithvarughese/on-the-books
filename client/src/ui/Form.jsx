import styled from "styled-components";

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
`
const Title = styled.div`
	font-weight: 400;
	font-size: 28px;
	text-align: center;
	color: ${props => props.color || "inherit"};
`
const Form = ({ title, ...props }) => {
	return (
		<StyledForm {...props}>
			{title && <Title {...props} >{title}</Title>}
			{props.children}
		</StyledForm>
	)
}

export default Form;