const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const data = {
  "Quarter 1 (Dec 22)": {
    revenue: "716.57 B",
    netIncome: "154.77 B",
    netProfit: "21.60%",
    operatingIncome: "213.55 B",
  },
  "Quarter 2 (Mar 23)": {
    revenue: "607.66 B",
    netIncome: "180.94 B",
    netProfit: "29.78%",
    operatingIncome: "49.95 B",
  },
  "Quarter 3 (Jun 23)": {
    revenue: "711.87 B",
    netIncome: "185.37 B",
    netProfit: "26.04%",
    operatingIncome: "252.08 B",
  },
  "Quarter 4 (Sep 23)": {
    revenue: "805.33 B",
    netIncome: "161.0 B",
    netProfit: "19.99%",
    operatingIncome: "219.36 B",
  },
};

app.get("/api/:quarter", (req, res) => {
  const { quarter } = req.params;
  if (data[quarter]) {
    res.json(data[quarter]);
  } else {
    res.status(404).json({ error: "Quarter not found" });
  }
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
