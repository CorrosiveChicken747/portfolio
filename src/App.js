import logo from './logo.svg';
import { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import RedirectHome from './Components/RedirectHome'
import Homescreen from './Pages/Homescreen'
import PageNotFound from './Pages/PageNotFound'
import MoneyGame from './Pages/MoneyGame'

function App() {
  const default_background = "#FFFFFF";
  const location = useLocation();

  const backgroundColorDict = useMemo(() => {
    return {
      "/home" : "#01112B",
    }
    //Anything not in the dict will use default_background
  }, [])

  useEffect(() => {
    var set_something = false;
    for (const [url_string, bg_color] of Object.entries(backgroundColorDict)) {
      if (location.pathname.toLowerCase().includes(url_string)) {
        document.body.style.background = bg_color;
        set_something = true;
      }
    }
    if (!set_something) {
      document.body.style.background = default_background;
    }
  }, [location, backgroundColorDict, default_background])

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  //<div onMouseMove={handleMouseMove}>
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RedirectHome/>} />
        <Route path="/portfolio" element={<RedirectHome/>} />
        <Route path="/home" element={<Homescreen/>} />
        <Route path="/musk-money" element={<MoneyGame/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
