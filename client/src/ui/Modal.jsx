import styled from "styled-components";

const Modal = styled.div`
	position: fixed;
	right: 0;
	left: 0;
	margin: auto;
	background-color: var(--COLOR-DARK);
	border-radius: 15px;
	z-index: 10;
  height: 90vh;
	padding: 1rem;
	width: 90vw;
	max-width: 600px;
	color: var(--COLOR-LIGHTER);

	@media (min-width: 600px) {
		padding: 2rem;
	}
`
export default Modal;