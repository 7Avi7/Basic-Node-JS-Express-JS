const authorize = (req, res, next) => {
  //   console.log("authorize");
  //   next();
  const { user } = req.query;
  if (user === "avi") {
    req.user = { name: "Avi", id: 3 };
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
