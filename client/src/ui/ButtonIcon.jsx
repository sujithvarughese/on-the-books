import styled from "styled-components";

const ButtonIcon = styled.button`
	cursor: pointer;
	border: none;
    padding: 0;
    margin: 0;
    box-shadow: none;
    font: inherit;
    outline: inherit;
    background-color: ${props=> props.backgroundColor || "inherit"};
    color: ${props => props.color || "inherit"};
    font-size: ${props => props.fontSize || "inherit"};
	border-radius: 6px;
	transition: 0.2s ease-in-out all;
  
	&:hover {
		color: var(--COLOR-ALT);
	}
`


export default ButtonIcon;