import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  z-index: 100;
`

export default Backdrop