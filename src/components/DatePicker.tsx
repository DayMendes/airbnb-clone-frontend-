import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt-BR';

import "react-datepicker/dist/react-datepicker.css";

registerLocale('pt-BR', pt);

export default function Calendario() {
    const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <DatePicker
        locale="pt-BR"
        selected={startDate} 
        onChange={(date) => setStartDate(date as Date)} 
    />
  );
}