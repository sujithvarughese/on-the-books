import styled from "styled-components";
import {createPortal} from "react-dom";

const StyledModal = styled.div`
	position: absolute;
	right: 0;
	left: 0;
	margin: auto;
	background-color: var(--COLOR-LIGHTER);
    border: var(--COLOR-LIGHT) 3px solid;
	border-radius: 15px;
	z-index: 100;
	padding: 1rem;
	width: 90vw;
    height: ${props => props.height || "auto"};
	max-width: 600px;


	@media (min-width: 600px) {
		padding: 2rem;
	}
`
const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  padding: 5rem;
  overflow-y: auto;
  z-index: 100;
`



const Modal = ({ closeFn, children}) => {
    return createPortal(
        <Backdrop onClick={closeFn}>
            <StyledModal onClick={(e) => e.stopPropagation()}>
                {children}
            </StyledModal>
        </Backdrop>
        , document.getElementById("modal"))

}

export default Modal;