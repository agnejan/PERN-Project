import "./App.css";
import LandingPage from "./pages/LandingPage";
import QuotesList from "./pages/QuotesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QuotesContextProvider } from "./context/QuotesContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#cbbf7a",
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
    <QuotesContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="App" sx={{ mb: 5 }}>
            <Routes>
              <Route path="/home" element={<LandingPage />}></Route>
              <Route path="/quotes" element={<QuotesList />}></Route>
            </Routes>

            <NavBar />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </QuotesContextProvider>
  );
}

export default App;
