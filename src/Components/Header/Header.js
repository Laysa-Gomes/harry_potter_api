import React from "react";
import * as S from "./Styled";
import Harry from "../../Imagens/harry2.png";

export default function () {
  return (
    <S.ContainerH>
      <S.Title>
        Magic World
        <S.Potter src={Harry} alt="Harry Potter" />
      </S.Title>
    </S.ContainerH>
  );
}
