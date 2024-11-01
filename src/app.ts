import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Request } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorhandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use("/api", router);

app.get("/", (req: Request, res) => {
  res.send("Hello From The Other World!");
  //   res.send(`
  //     <!DOCTYPE html>
  // <html lang="en">
  // <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <title>GamePlan - Backend Overview</title>
  //     <style>
  //         * {
  //             margin: 0;
  //             padding: 0;
  //             box-sizing: border-box;
  //         }

  //         body {
  //             font-family: 'Helvetica Neue', Arial, sans-serif;
  //             background-color: #f5f5f5;
  //             display: flex;
  //             flex-direction: column;
  //             min-height: 100vh;
  //             color: #333;
  //         }

  //         .container {
  //             flex: 1;
  //             width: 90%;
  //             max-width: 1000px;
  //             margin: 40px auto;
  //         }

  //         h1 {
  //             font-size: 2.5rem;
  //             color: #0d2040;
  //             text-align: center;
  //             margin-bottom: 20px;
  //         }

  //         .overview, .section {
  //             margin-bottom: 40px;
  //         }

  //         p, ul {
  //             font-size: 1rem;
  //             line-height: 1.7;
  //             color: #555;
  //         }

  //         ul {
  //             list-style: none;
  //         }

  //         ul li {
  //             position: relative;
  //             margin-bottom: 10px;
  //         }

  //         ul li::before {
  //             content: '•';
  //             color: #1a73e8;
  //             font-weight: bold;
  //             margin-right: 10px;
  //             font-size: 1.2rem;
  //         }

  //         a {
  //             color: #1a73e8;
  //             text-decoration: none;
  //         }

  //         a:hover {
  //             text-decoration: underline;
  //         }

  //         footer {
  //             background-color: #bfdbff;
  //             color: white;
  //             text-align: center;
  //             padding: 20px 0;
  //             margin-top: auto;
  //             font-size: 0.9rem;
  //         }

  //         footer p {
  //             margin-bottom: 5px;
  //         }

  //         footer a {
  //             color: black;
  //             font-weight: bold;
  //         }
  //     </style>
  // </head>
  // <body>

  //     <div class="container">
  //         <h1>Welcome to the GamePlan Backend!</h1>

  //         <div class="overview">
  //             <p>
  //                 <strong>GamePlan</strong> is a sports facility booking system that allows users to easily book facilities, view schedules, and manage their profiles. This backend powers the APIs for managing bookings, user data, and facility availability.
  //             </p>
  //         </div>

  //         <div class="section">
  //             <h2>Backend Details</h2>
  //             <ul>
  //                 <li><strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Mongoose</li>
  //                 <li><strong>Frontend:</strong> React, Redux, TypeScript (managed separately)</li>
  //                 <li><strong>Deployment:</strong> Vercel for frontend, backend hosted here</li>
  //                 <li><strong>API Routes:</strong> Manage bookings, users, and facilities via REST APIs.</li>
  //             </ul>
  //         </div>

  //         <div class="section">
  //             <h2>Key Features</h2>
  //             <ul>
  //                 <li>User Registration and Login</li>
  //                 <li>Booking and Scheduling System</li>
  //                 <li>Facility Search and Management</li>
  //                 <li>Payment System</li>
  //                 <li>Profile Management</li>
  //             </ul>
  //         </div>

  //         <div class="section">
  //             <h2>Developer Information</h2>
  //             <p>
  //                 This backend is built and maintained by a team of dedicated developers. For more details, contributions, or to report issues, visit our GitHub repository.
  //             </p>
  //             <p><a href="https://github.com/saifmaamun">View on GitHub</a></p>
  //         </div>
  //     </div>

  //     <footer>
  //         <p>© 2024 GamePlan Backend | Powered by Node.js & MongoDB</p>
  //         <p><a href="https://github.com/saifmaamun">GitHub Repository</a></p>
  //     </footer>

  // </body>
  // </html>

  //                 `);
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
