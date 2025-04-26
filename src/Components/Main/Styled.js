import styled from "styled-components";
import Mapa from "../../Imagens/mapadomaroto.png";

export const ContCard = styled.div`
  width: 100%;
  background-image: url(${Mapa});
`;
export const Card = styled.div`
  width: 20%;
  display: flex;
  background-color: #cdb071;
  flex-direction: column;
  align-items: center;
  margin: 1%;
  padding-bottom: 2%;
  color: #700010;
  box-shadow: 0.1vw 0.2vw 1vw 0.5vw black;
  img {
    width: 14vw;
    height: 45vh;
    object-fit: contain;
  }
  ul {
    list-style: none;
    color: black;
    font-family: "Inter Tight", sans-serif;
    padding-top: 2%;
    color: #755716;
  }
`;
export const Name = styled.h2`
  width: 100%;
  text-align: center;
  padding: 4%;
  font-family: "EB Garamond", serif;
`;
export const Logo = styled.img`
  width: 100vw;
  background: red;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2% 4% 2% 4%;
  display: flex;
  flex-wrap: wrap;
`;
