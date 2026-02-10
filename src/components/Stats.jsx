const Stats = ({ weather }) => {
  return (
    <div className="stats">
      <div className="stat">
        <span>Feels like</span>
        <strong>{weather.current.apparent_temperature}°</strong>
      </div>

      <div className="stat">
        <span>Humidity</span>
        <strong>{weather.current.relative_humidity_2m}%</strong>
      </div>

      <div className="stat">
        <span>Wind</span>
        <strong>
          {weather.current.wind_speed_10m}{" "}
          {weather.current_units.wind_speed_10m}
        </strong>
      </div>

      <div className="stat">
        <span>Precipitation</span>
        <strong>
          {weather.current.precipitation} {weather.current_units.precipitation}
        </strong>
      </div>
    </div>
  );
};
export default Stats;
