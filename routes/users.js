var express = require("express");
var router = express.Router();

const fs = require("fs");
const cors = require("cors");

router.use(cors());

router.get("/", (req, res) => {
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.log(err);
    }

    let users = JSON.parse(data);

    res.send(users);
    return;
  });
});

router.post("/", (req, res) => {
  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.log(err);
    }

    let users = JSON.parse(data);

    let user = {
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userNumber: req.body.userNumber,
    };

    users.push(user);

    fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.log(err);
      }
    });

    res.send(users);
    return;
  });
});

module.exports = router;
