const validation = (req, res, next) => {
  const { email, name, password } = req.body;
  console.log("validation req.body", req.body);
  function validEmail(userEmail) {
    // this is Regular Expression
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === "/register") {
    console.log(!email.length);
    if (![email, name, password].every(Boolean)) {
      // this is checking if there are any empty values in these inputs
      return res.status(401).json("Missing credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid email");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.status(401).json("Missing credentials");
    } else if (!validEmail(email)) {
      return res.status(401).json("Invalid email");
    }
  }
  next(); // this waits until everything is checked and ok and then continues to the next route
};
export default validation;
