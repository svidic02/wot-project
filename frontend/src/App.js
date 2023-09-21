import ReactSwitch from "react-switch";
// import Switch from '@mui/material/Switch';
import AppRoutes from "./AppRoutes";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import { useLoading } from "./hooks/useLoading";
import { setLoadingInterceptor } from "./interceptors/loadingInterceptor";
import { createContext, useEffect, useState } from "react";
import classes from "./index.css";

export const ThemeContext = createContext(null);

function App() {
  const { showLoading, hideLoading } = useLoading();
  useEffect(() => {
    setLoadingInterceptor({ showLoading, hideLoading });
  }, [hideLoading, showLoading]);

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div theme={theme} id="siteWrapper">
        <Loading />
        <Header
          toggle={
            <>
              <label>Toggle {theme !== "light" ? "Light" : "Dark"} Mode</label>
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
            </>
          }
        />
        <AppRoutes />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
