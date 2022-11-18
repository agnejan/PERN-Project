import React from "react";
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
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StringDecoder } from "string_decoder";
import { AuthContext } from "../context/AuthContext";

interface State {
  password: string;
  email: string;
  name: string;
  error: string;
  showPassword: boolean;
}

function Register() {
  const [values, setValues] = useState<State>({
    password: "",
    email: "",
    name: "",
    error: "",
    showPassword: boolean,
  });
  // const [showPassword, setShowPassowrd] = useState<State>("");
  //  const [name, setName] = useState("");
  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { register } = useContext(AuthContext);

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  //REGISTRATION

  // const handleRegistration = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const body = { name, email, password };
  //     const response = await fetch("http://localhost:5000/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });
  //     console.log(body);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };

  const handleRegistration = () => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>Register</h2>
      <form onSubmit={handleRegistration}>
        <Box
          //   component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", rowGap: "1" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            label="Your username"
            variant="outlined"
            color="secondary"
            value={values.name}
            onChange={handleChange("name")}
            required
          />

          <TextField
            id="email"
            label="Your email"
            variant="outlined"
            color="secondary"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            required
          />
          <FormControl
            sx={{ width: "25ch" }}
            variant="outlined"
            color="secondary"
            required
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Choose a password
            </InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
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
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Choose a password"
            />
          </FormControl>
          <Button variant="contained" color="secondary" type="submit">
            REGISTER
          </Button>
        </Box>
      </form>
      <div>
        Have an account already?{" "}
        <Link
          to={"/login"}
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          Log In
        </Link>{" "}
        here.{" "}
      </div>
    </div>
  );
}

export default Register;
