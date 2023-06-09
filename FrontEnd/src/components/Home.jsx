import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getCars } from "../features/cars/cars";

export const Home = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.cars);
  console.log(cars);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <>
      <Heading>ALL CARS</Heading>
      <Container>
        {cars.map((e) => (
          <Box key={e._id}>
            <img src={e.image} />
            <Info>
              <div>
                <p>Company:</p>
              </div>
              <p>{e.company}</p>
            </Info>
            <Info>
              <div>
                <p>Model:</p>
              </div>
              <p>{e.model}</p>
            </Info>
            <Info>
              <div>
                <p>Year:</p>
              </div>
              <p>{e.year}</p>
            </Info>
            <Info>
              <div>
                <p>Price:</p>
              </div>
              <p>{e.price}</p>
            </Info>
            <Info>
              <div>
                <p>Color:</p>
              </div>
              <p>{e.color}</p>
            </Info>
            {e.available ? (
              <Availability>Buy This Car</Availability>
            ) : (
              <Unavailable>Unavailable</Unavailable>
            )}
          </Box>
        ))}
      </Container>
    </>
  );
};

const Heading = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-top: 20px;
`;

const Box = styled.div`
  border: 2px solid;
  border-radius: 10px;

  img {
    width: 100%;
    height: 200px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

const Info = styled.div`
  display: flex;
  margin-top: 20px;

  div {
    width: 100px;
  }

  p {
    padding: 0;
    margin: 0;
  }

  & p:last-child {
    margin-left: 10px;
  }
`;

const Availability = styled.div`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  border: 1px solid green;
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: lightgreen;
  border-radius: 5px;

  :hover {
    transform: scale(1.2);
    transition: transform 0.5s ease-out;
  }
`;

const Unavailable = styled.div`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  border: 1px solid red;
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #ea6969;
  border-radius: 5px;
`;
