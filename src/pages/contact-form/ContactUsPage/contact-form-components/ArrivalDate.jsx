import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";

const ArrivalDate = () => {
  const [arrivalDate, setArrivalDate] = useState("Undecided");
  const [dateInputVisible, setDateInputVisible] = useState(false);

  const handleDateChange = (date) => {
    setArrivalDate(date);
  };

  // Функция для безопасного вывода даты
  const formatArrivalDate = (date) => {
    if (date && date instanceof Date && !isNaN(date)) {
      return date.toLocaleDateString();
    }
    return "Undecided";
  };
  return (
    <li>
      <div className="mb-4">
        <label className="font-semibold text-lg flex items-center">
          <FaCalendarAlt className="mr-2" />
          Tentative arrival date
        </label>
        <div className="flex gap-4 items-center">
          {/* Кнопка Undecided */}
          <button
            type="button"
            onClick={() => {
              setArrivalDate(null); // Убираем дату, устанавливая null
              setDateInputVisible(false); // Скрываем поле ввода даты
            }}
            className={`py-2 px-4 border rounded-lg ${
              arrivalDate === null ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            Undecided
          </button>

          {/* Поле выбора даты */}
          <button
            type="button"
            onClick={() => {
              setDateInputVisible(true); // Показываем поле для ввода даты
            }}
            className={`py-2 px-4 border rounded-lg ${
              arrivalDate ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
          >
            Select Date
          </button>

          {/* Если дата выбрана */}
          {dateInputVisible && (
            <DatePicker
              selected={arrivalDate} // Используем состояние arrivalDate
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              className="w-28 p-2 border-2 rounded-lg"
            />
          )}
        </div>
        <p className="mt-2 text-gray-500">
          Selected: {formatArrivalDate(arrivalDate)}{" "}
          {/* Используем функцию для отображения даты */}
        </p>
      </div>
    </li>
  );
};

export default ArrivalDate;
