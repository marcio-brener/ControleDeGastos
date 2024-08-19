import React from "react";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"; // Importa o locale para o português
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  // Formatar a data no padrão brasileiro
  const formattedDate = format(new Date(item.date), 'dd/MM/yyyy', { locale: ptBR });

  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{item.amount}</C.Td>
      <C.Td>{formattedDate}</C.Td> {/* Adiciona a data formatada */}
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
