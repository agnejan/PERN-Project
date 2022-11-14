import "./App.css";
import LandingPage from "./pages/LandingPage";
import QuoteList from "./pages/QuoteList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9f956c",
    },
    secondary: {
      main: "#f4e87c",
    },
    info: {
      main: "#a16da8",
    },
    action: {
      main: "#d500f9",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/home" element={<LandingPage />}></Route>
            <Route path="/quotes" element={<QuoteList />}></Route>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
