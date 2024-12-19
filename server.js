const express = require("express");
const cors = require("cors");

const userRoutes = require("./Routes/userRoutes");
const pemesananRoutes = require("./Routes/orderRoutes");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/pemesanan", pemesananRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
