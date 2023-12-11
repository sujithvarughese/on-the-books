import styled from "styled-components";

const Card = styled.div`
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 0.4rem;
    transition: 0.2s ease-in-out all;
    border-radius: 10px;
	color: var(--COLOR-DARK);
	z-index: 0;
    background-color: var(--COLOR-LIGHTER);
  
  
	&:hover {
        background-color: var(--COLOR-LIGHT);
	}
  @media (min-width: 600px) {
    padding: 1rem;
  }
`

export default Card;