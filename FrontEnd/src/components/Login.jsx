import styled from "styled-components";

export const Login = () => {
  return (
    <Container>
      <h2>Login</h2>
      <Box>
        <p> Email:</p>
        <input placeholder="Enter email"></input>
      </Box>
      <Box>
        <p> Password:</p>
        <input placeholder="Enter password" type="password"></input>
      </Box>
      <Button>
        <button>Submit</button>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid;
  margin-top: 30px;
  width: 30%;
  margin: auto;
  margin-top: 50px;
  border-radius: 10px;

  h2 {
    text-align: center;
  }
`;

const Box = styled.div`
  width: 90%;
  margin: auto;

  p {
    font-size: 20px;
    margin: 0;
    margin-bottom: 10px;
  }

  input {
    width: 80%;
    height: 30px;
    background-color: #e4f4f9;
    border-radius: 2px;
    margin-bottom: 30px;
  }
`;

const Button = styled.div`
  text-align: center;
  margin-bottom: 20px;

  button {
    width: 120px;
    font-size: 20px;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid;
    background-color: lightskyblue;
  }
`;
