import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import pt from 'date-fns/locale/pt-BR';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

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