const {
    client,
    createTables,
    createProject,
    fetchProjects,
    seedData
} = require("./db");

const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// Serve frontend
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "../client/dist/index.html"))
);
app.use(
  "/assets",
  express.static(path.join(__dirname, "../client/dist/assets"))
);



// Fetch all projects
app.get("/api/projects", async (req, res, next) => {
    try {
      const projects = await fetchProjects();
      res.json(projects);
    } catch (ex) {
      next(ex);
    }
  });

  const init = async () => {
    const port = process.env.PORT || 3000;
    
    await client.connect();
    console.log("Connected to database");
  
    await createTables();
    await seedData();
    console.log("Tables created");
  
    app.listen(port, () => console.log(`Listening on port ${port}`));
  };
  
  init();