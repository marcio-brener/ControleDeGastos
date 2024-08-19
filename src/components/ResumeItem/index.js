import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value, date }) => { // Adicione 'date' como um prop
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{value}</C.Total>
      {date && <C.Date>{date}</C.Date>} {/* Exibe a data se ela estiver presente */}
    </C.Container>
  );
};

export default ResumeItem;
