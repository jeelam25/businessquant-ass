const express = require("express");
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jeelam$25",
  database: "quantproducts",
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MqSQL");
});

const app = express();

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// GET Method to Calling This API Api/ticker=AAPL&column=revenue,gp&period=5y

app.get("/Api/ticker=:tickerId&column=:revenue,gp&period=:5y", (req, res) => {
  const { tickerId } = req.params;

  con.query(
    `SELECT revenue, gp FROM api WHERE ticker LIKE "${tickerId}" AND date_Product >= DATE_SUB(NOW(), INTERVAL 5 YEAR)`,
    (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        res.status(500);
        res.send("Error fetching users");
        return;
      }
      res.json(results);
    }
  );
});

// Get Method to Calling This API  Api/ticker=ZS&column=revenue,gp&period=5y

app.get("/Api/ticker=:tickerId&column=:revenue,gp&period=:5y", (req, res) => {
  const { tickerId } = req.params;

  con.query(
    `SELECT revenue, gp FROM api WHERE ticker LIKE "${tickerId}" AND date_Product >= DATE_SUB(NOW(), INTERVAL 5 YEAR)`,
    (err, results) => {
      if (err) {
        console.error("Error fetching data:", err);
        res.status(500);
        res.send("Error fetching users");
        return;
      }
      res.json(results);
    }
  );
});
