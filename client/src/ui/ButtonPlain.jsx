import styled from "styled-components";
import { motion } from "framer-motion"

const ButtonPlain = styled(motion.button)`
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 0;
  margin: 0;
  transition: 0.2s ease-in-out all;
  color: inherit;
  box-shadow: none;
  font: inherit;
  background-color: inherit;
  outline: inherit;

  
  &:hover {
    color: var(--COLOR-ALT);
  }
`
export default ButtonPlain;