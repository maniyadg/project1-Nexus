const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();



app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/user/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    res.json({ message: "user registered"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong" });
  }
});

// login method
app.post("/user/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        res.json({ message: "Login Successfully" });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong" });
      }
});

app.get("/" , async(req,res) => {
    res.json({message: "Server is Working"})
})

app.listen(process.env.PORT || 3003, function () {
  console.log("Server Listening!");
});