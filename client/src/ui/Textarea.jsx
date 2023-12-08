import styled from "styled-components";

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid #bcccdc;
  border-radius: 5px;
  height: 200px;
  width: 100%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
  0 10px 10px -5px rgba(0, 0, 0, 0.04);

  @media (min-width: 400px) {
    height: 350px;
  }

  @media (min-width: 600px) {
    height: 550px;
  }
  
  @media (min-width: 705px) {
    height: 300px;
  }
  
  @media (min-width: 850px) {
    height: 400px;
  }
  @media (min-width: 1000px) {
    height: 550px;
  }
  @media (min-width: 1200px) {
    height: 700px;
  }
`;

export default Textarea;
