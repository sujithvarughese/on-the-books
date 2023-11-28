import styled from "styled-components";

const Card = styled.div`

	color: var(--COLOR-LIGHT);
	transition: 0.3s ease-in-out all;
	border-radius: 10px;
	z-index: 10;
    background-color: ${props=>props.backgroundColor};
	
	&:hover {
      background-color: var(--COLOR);
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
	}

	@media (min-width: 600px) {
		padding: 2rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}

`

export default Card;