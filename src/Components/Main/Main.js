import React, { useEffect, useState } from "react";
import * as S from "./Styled";
import axios from "axios";
import Hoglogo from "../../Imagens/Hlogo.png";

export default function Harry() {
  let Api = "https://hp-api.herokuapp.com/api/characters";
  const [personagem, setPersonagem] = useState([]);

  useEffect(() => {
    axios.get(Api).then((response) => {
      console.log(response.data);
      setPersonagem(response.data.slice(0, 25));
    });
  }, [Api]);

  return (
    <S.ContCard>
      <S.Box>
        {personagem.map((item) => (
          <>
            <S.Card>
              <S.Name>{item.name}</S.Name>
              <div>
                <img src={item.image} alt={item.name} />
                <ul>
                  <li>
                    <strong>Espécie:</strong> {item.species}
                  </li>
                  <li>
                    <strong>Gênero:</strong> {item.gender}
                  </li>
                  <li>
                    <strong>Casa:</strong> {item.house}
                  </li>
                </ul>
                <S.Logo src={Hoglogo} alt="Hogwarts School" />
              </div>
            </S.Card>
          </>
        ))}
      </S.Box>
    </S.ContCard>
  );
}
