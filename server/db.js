const pg = require("pg");
const client = new pg.Client(
    process.env.DATABASE_URL || "postgres://localhost/portfolio_db");
const { response } = require("express");

const createTables = async () => {
    const SQL = `
    DROP TABLE IF EXISTS projects;
    DROP TABLE IF EXISTS users;

        CREATE TABLE projects(
        id SERIAL PRIMARY KEY,
        projectname VARCHAR(50),
        projectdescription VARCHAR(1000),
        link VARCHAR(100)
        );
    `;
    await client.query(SQL);
};

const seedData = async () => {
    
    await createProject({
        projectname: "Capstone Project, Dr Pepper Review Site",
        projectdescription: "Developed a review-style website showcasing various Dr Pepper flavors, complete with user reviews, a login and registration system, a 'My Account' page, and an admin panel. The project was built using HTML, CSS, JavaScript, JSX, and SQL.",
        link: "https://github.com/jared-schwartz/capstone-project"
    });
    await createProject({
        projectname: "Invoice Details Auto-Formatter",
        projectdescription: "Developed an Excel invoice formatter to streamline data organization, standardize formatting, and automate calculations for totals, taxes, and discounts. Leveraged advanced Excel features such as macros, pivot tables, and conditional formatting to minimize manual effort. Users can import data by selecting a file, which is then automatically formatted to meet specified parameters and saved both as a new file and as a new sheet in the original location. This solution was designed for a customer at Roy O. Martin during my time with Grainger.",
        link: ""
    });
    await createProject({
        projectname: "Issuance Report Auto-Formatter",
        projectdescription: "Developed an Excel issuance report formatter to streamline data entry and reduce manual workload. Users input data into Sheet 1, which is then automatically formatted to match the required columns, with any unnecessary data removed. This solution was created for a customer at Roy O. Martin during my tenure with Grainger. By fulfilling this customer request, the project successfully built enough trust to facilitate an upgrade from the old system to a new, improved one.",
        link: ""
    });

};

const createProject = async ({projectname, projectdescription, link}) => {
    const SQL =`
    INSERT INTO projects(projectname, projectdescription, link) VALUES($1,$2,$3) RETURNING *
    `
    const response = await client.query(SQL, [projectname, projectdescription, link]);
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