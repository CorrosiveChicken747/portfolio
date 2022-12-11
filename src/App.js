import { useEffect, useMemo, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import RedirectHome from './Components/RedirectHome'
import Homescreen from './Pages/Homescreen'
import PageNotFound from './Pages/PageNotFound'
import MoneyGame from './Pages/MoneyGame'
import PersistentHomecorner from './Components/PersistentHomeCorner';

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

  const navBarPages = useMemo(() => {
    return [
      "musk-money",
    ]
  }, [])

  const [show_navbar, set_show_navbar] = useState(false);

  useEffect(() => {
    let local_show_navbar = false;
    for (const page of navBarPages) {
      if (location.pathname.toLowerCase().includes(page)) {
        local_show_navbar = true;
      }
    }
    //alert("Determined that the navbar should be: " + local_show_navbar);
    set_show_navbar(local_show_navbar);
  }, [location, navBarPages])

  return (
    <div className="App">
      <PersistentHomecorner show_self={show_navbar}/>
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
