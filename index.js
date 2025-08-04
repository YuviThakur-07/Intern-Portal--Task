const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public")); // to serve static files like CSS/JS/images

app.get("/", (req, res) => {
  const backendData = {
    user: {
      name: "Yuvraj Panwar",
      avatar:
        "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg",
      role: "Software Engineering Intern",
      referralCode: "YUVI2025",
      amountRaised: 1875,
    },
    leaderboard: [
      { name: "Taylor Smith", amount: 4230, referrals: 8, reputation: 4.8 },
      { name: "Jordan Lee", amount: 3890, referrals: 7, reputation: 4.7 },
      { name: "Casey Brown", amount: 3420, referrals: 6, reputation: 4.5 },
      { name: "Yuvraj Panwar", amount: 1875, referrals: 3, reputation: 4.2 },
      { name: "Riley Wilson", amount: 1560, referrals: 3, reputation: 4.0 },
    ],
  };
  const progressPercent = Math.min((backendData.user.amountRaised / 5000) * 100, 100).toFixed(2);

  res.render("index", { data: backendData,  progress: progressPercent });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
