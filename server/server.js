const express = require("express");
const cors = require("cors");

require("./config/db");

const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
    res.send("Notes API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});