function HourCard({ time, temp, icon }) {
  return (
    <div className="hour">
      <img className="hour_img" src={icon} alt="weather icon" />
      {time} <span>{temp}°</span>
    </div>
  );
}

export default HourCard;
