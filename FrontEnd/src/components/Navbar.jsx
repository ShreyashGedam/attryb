import styled from "styled-components";

export const Navbar = () => {
  return (
    <Container>
      <h2>BYUC Corp</h2>
      <button>Sign Up</button>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid;
  width: 90%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;

  button {
    height: 30px;
    margin-right: 20px;
    font-size: 19px;
    width: 90px;
    cursor: pointer;
  }

  h2{
    margin-left: 10px;
  }
`;
