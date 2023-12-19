import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {createPortal} from "react-dom";

const Backdrop = styled.div`
  position: fixed;
  top: 10rem;
  width: 100vw;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  z-index: 100;
  backdrop-filter: blur(3px);
`
const authAnimations = keyframes`
	0% {
		transform: translateY(40px);
		opacity: 0;
	}
	100% {
		transform: translateY(0);
		opacity: 1;
	}
`
const StyledAuthCard = styled(motion.div)`
  background: var(--COLOR-LIGHT);
  border-radius: 15px;
  margin: auto;
  z-index: 100;
  padding: 1rem;
  width: 90vw;
  max-width: 550px;
  color: var(--COLOR-LIGHTER);
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  animation: ${authAnimations} 200ms ease-in forwards;
  
`

const AuthCard = ({ children, closeFn }) =>
        <Backdrop onClick={closeFn}>
            <StyledAuthCard onClick={(e) => e.stopPropagation()}>
                {children}
            </StyledAuthCard>
        </Backdrop>



export default AuthCard