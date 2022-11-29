import "./App.css";
import LandingPage from "./pages/LandingPage";
import QuotesList from "./pages/QuotesList";
import AddNewQuote from "./pages/AddNewQuote";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QuotesContextProvider } from "./context/QuotesContext";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import Logout from "./pages/Logout";
import QuoteDetail from "./pages/QuoteDetail";
import { positions } from "@mui/system";
import UserQuotes from "./pages/UserQuotes";

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
    warning: {
      main: "#d500f9",
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <QuotesContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <div className="App">
              <div style={{ marginBottom: "5vh" }}>
                <Routes>
                  <Route path="/home" element={<LandingPage />}></Route>
                  <Route path="/quotes" element={<QuotesList />}></Route>
                  <Route path="/newquote" element={<AddNewQuote />}></Route>
                  <Route path="/register" element={<Register />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                  <Route path="/profile" element={<ProfilePage />}></Route>
                  <Route path="/logout" element={<Logout />}></Route>
                  <Route path="/myquotes" element={<UserQuotes />}></Route>
                  <Route
                    path="/quotes/:id"
                    exact
                    element={<QuoteDetail />}
                  ></Route>
                </Routes>
              </div>

              <NavBar />
            </div>
          </ThemeProvider>
        </BrowserRouter>
      </QuotesContextProvider>
    </AuthProvider>
  );
}

export default App;
