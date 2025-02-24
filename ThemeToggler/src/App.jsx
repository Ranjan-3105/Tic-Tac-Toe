import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }


  //actual chnage in theme

  let selection = document.querySelector('html');

  useEffect(()=>{
    selection.classList.remove("light" , "dark");
    selection.classList.add(themeMode);
  } , [themeMode])


  return (
    <ThemeProvider value={{themeMode , lightTheme , darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
            </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
