const express = require("express");
const app = express();
const userRouter = require("./Routes/userRoutes");
const noteRouter = require("./Routes/noteRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();




console.log("MongoDB URI:", process.env.MONGO_URL);  // Debugging line
console.log("Secret Key:", process.env.SECRET_KEY);  // Debugging line

if (!process.env.MONGO_URL) {
  console.error("MongoDB connection string is not defined in environment variables.");
  process.exit(1);
}

app.use(express.json());
app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) => {
  res.send("NOTES API FROM PRIYANSU");
});

const PORT = process.env.PORT || 10000;

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
