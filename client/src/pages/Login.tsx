import React, { ChangeEvent, FormEvent, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface State {
  password: string;
  email: string;
  error: string;
  showPassword: boolean;
}

function Login() {
  const [values, setValues] = useState<State>({
    password: "",
    email: "",
    error: "",
    showPassword: false,
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [showPassword, setShowPassowrd] = useState("");

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { success, error } = await login(values.email, values.password);
    if (success) {
      navigate("/profile");
    } else {
      error && setValues({ ...values, error: error });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", rowGap: "1" },
          }}
          // noValidate
          // autoComplete="off"
        >
          <TextField
            id="email"
            label="Your email"
            variant="outlined"
            color="info"
            value={values.email}
            onChange={handleChange("email")}
            required
          />
          <FormControl
            sx={{ width: "25ch" }}
            variant="outlined"
            color="info"
            required
          >
            <InputLabel htmlFor="password">Choose a password</InputLabel>
            <OutlinedInput
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Choose a password"
            />
          </FormControl>
          <Button variant="contained" color="secondary" type="submit">
            LOG IN
          </Button>
        </Box>
      </form>
      <div>
        Don't have an account yet?{" "}
        <Link
          to={"/register"}
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          Register
        </Link>{" "}
        here.{" "}
      </div>
    </div>
  );
}

export default Login;
