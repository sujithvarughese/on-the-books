import styled from "styled-components";

const StyledNotebookContainer = styled.div`
  background-image: url("../assets/images/notebook-half.png");
  height: 100%;
  width: 100%;
  float: left;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  
  
  @media (min-width: 705px) {
    background-image: url("../assets/images/notebook-full.png");
  }
`

const NotebookContainer = (props) => {
    return (
        <StyledNotebookContainer>
            {props.children}
        </StyledNotebookContainer>
    )
}
export default NotebookContainer