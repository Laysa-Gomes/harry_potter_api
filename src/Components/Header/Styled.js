import styled from "styled-components";
import Background from "../../Imagens/HOGWARTS.jpg";

export const ContainerH = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  background-image: url(${Background});
  background-size: 50vw;
  background-repeat: no-repeat;
  background-position: 100%;
`;
export const Title = styled.h1`
  width: 60%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    #700010,
    #700010,
    #700010,
    #700010,
    #700010,
    #700010,
    transparent
  );
  color: #d6b511;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 4vw;
  padding-left: 12%;
  font-family: "Cinzel", serif;
`;
export const Potter = styled.img`
  width: 40%;
`;
