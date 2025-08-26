import Layout from "./components/Layout.jsx";
import { useTheme } from "./context/themeContext.jsx";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="design_div"></div>
      <div className="design_div"></div>
      <button className={`theme`} onClick={toggleTheme}>
        {theme === "light" ? "dark" : "light"}
      </button>
      <Layout />
    </>
  );
}

export default App;
