import logo from './logo.svg';
import { useEffect, useMemo } from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import RedirectHome from './Components/RedirectHome'
import Homescreen from './Pages/Homescreen'
import PageNotFound from './Pages/PageNotFound'

function App() {
  const default_background = "#FFFFFF";
  const location = useLocation();

  const backgroundColorDict = useMemo(() => {
    return {
      "/home" : "#01112B",
    }
    //Anything not in the dict will use defualt_background
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



  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RedirectHome/>} />
        <Route path="/home" element={<Homescreen/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
