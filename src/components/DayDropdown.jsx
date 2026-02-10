const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DayDropdown = ({ dayChecked, setDayChecked, isOpen, setIsOpen }) => {
  return (
    <div className="dropdown">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="dropdown__button"
      >
        {dayChecked}
        <span className="dropdown__icon"></span>
      </button>

      {isOpen && (
        <ul className="dropdown__list">
          {days.map((day) => (
            <li
              key={day}
              className={`dropdown__item ${
                dayChecked === day ? "checked" : ""
              }`}
              onClick={() => {
                setDayChecked(day);
                setIsOpen(false);
              }}
            >
              {day}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DayDropdown;
