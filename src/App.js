import { useContext, useState, useEffect } from "react";
import "./App.css";
import WeatherDashboard from "./components/WeatherDashboard";
import { WeatherContext } from "./context/WeatherContext";
import Loader from "./components/Loader";
function App() {
  const { loading } = useContext(WeatherContext);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      {loading && <Loader />}

      {isMobile ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-red-900 text-white flex justify-center items-center z-[999]">
          Abhi responsiveness add nahi kara hu :(
        </div>
      ) : (
        ""
      )}
      <WeatherDashboard />
    </div>
  );
}

export default App;
