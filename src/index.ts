import express from "express";
import cors from "cors";
import { createConnection, MysqlError } from "mysql";
import helmet from "helmet";
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Creates mySQL connection
const con = createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "J@feth2003",
  database: "classicmodels",
});

// Connects to mySQL database
con.connect((error: any) => {
  if (error) throw error;
  console.log("Connected");
});

// Creates a customer let variable
let customers: any;

// Creates a query that will select all the customers from the mySQL database
con.query("SELECT * FROM customers", function (error: MysqlError, result: any) {
  if (error) throw error;
  // Sets customers to the data
  customers = JSON.parse(JSON.stringify(result));

  // Logs to the console the customers
  console.log(customers);
});

// Listens on port 6000
app.listen(6000, () => {
  console.log("Listening on port 6000");
});
