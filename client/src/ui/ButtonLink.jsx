import styled from "styled-components";

const ButtonLink = styled.button`
    cursor: pointer;
    border: none;
    transition: 0.2s ease-in-out all;
    background-color: inherit;
    text-decoration: inherit;
    font-size: ${props => props.fontSize || "inherit"};
	&:hover {
		color: var(--COLOR-ALT);
	}
`
export default ButtonLink;