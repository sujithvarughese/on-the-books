import styled from "styled-components";
import { motion } from "framer-motion"

const StyledCard = styled(motion.div)`
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    padding: 0.4rem;
    transition: 0.2s ease-in-out all;
    border-radius: 8px;
	z-index: 0;
    background-color: var(--COLOR-LIGHT);
  
  
	&:hover {
      color: var(--COLOR-LIGHTER);
        background-color: var(--COLOR-DARK);
	}
  @media (min-width: 600px) {
    padding: 1rem;
  }
`

const Card = ({ children }) =>
    <StyledCard
        whileHover={{ scale: 1.05 }}

    >
        {children}
    </StyledCard>

export default Card;