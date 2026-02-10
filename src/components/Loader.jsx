import { BarLoader } from "react-spinners";

function Loader() {
  return (
    <div className="loader-wrapper">
      <p>Waiting weather data...</p>
      <BarLoader 
        color="#36d7b7" 
        height={5} 
        width={200} 
        speedMultiplier={1.5}
      />
    </div>
  );
}

export default Loader;