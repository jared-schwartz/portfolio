const pg = require("pg");
const client = new pg.Client(
    process.env.DATABASE_URL || "postgres://localhost/portfolio_db");
const { response } = require("express");

const createTables = async () => {
    const SQL = `
    DROP TABLE IF EXISTS projects;

        CREATE TABLE projects(
        id SERIAL PRIMARY KEY,
        project_name VARCHAR(50),
        description VARCHAR(255),
        link VARCHAR(50)
        );
    `;
    await client.query(SQL);
};

const seedData = async () => {
    
    await createProject({
        project_name: "TEST",
        description: "TEST TEST",
        link: "https://github.com/jared-schwartz/capstone-project"
    });
};

const createProject = async ({project_name, description, link}) => {
    const SQL =`
    INSERT INTO projects(project_name, description, link) VALUES($1,$2,$3) RETURNING *
    `
    const response = await client.query(SQL, [project_name, description, link]);
    return  response.rows[0];
};

const fetchProjects = async () => {
    const SQL = `
    SELECT * FROM projects
    `;
    const response = await client.query(SQL);
    return response.rows;
};

module.exports = {
    client,
    createTables,
    createProject,
    fetchProjects,
    seedData
};