import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total, date }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
        date={date} // Passe a data para o ResumeItem
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
        date={date} // Passe a data para o ResumeItem
      />
      <ResumeItem 
        title="Total" 
        Icon={FaDollarSign} 
        value={total} 
        date={date} // Passe a data para o ResumeItem
      />
    </C.Container>
  );
};

export default Resume;
