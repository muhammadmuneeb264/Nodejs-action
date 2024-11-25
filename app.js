const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Serve the profile page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Professional Profile - Muhammad Muneeb</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f3f4f6;
                    color: #333;
                }
                header {
                    background-color: #007BFF;
                    color: white;
                    text-align: center;
                    padding: 1.5rem 0;
                }
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 2rem;
                }
                .profile-image {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    margin: 0 auto;
                    display: block;
                    border: 3px solid #007BFF;
                }
                h1, h2 {
                    text-align: center;
                    color: #007BFF;
                }
                .summary {
                    text-align: center;
                    margin: 1rem 0;
                }
                .badges {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    margin-top: 2rem;
                }
                .badge {
                    width: 150px;
                    height: 150px;
                    margin: 1rem;
                    text-align: center;
                }
                footer {
                    background-color: #333;
                    color: white;
                    text-align: center;
                    padding: 1rem;
                    margin-top: 2rem;
                }
            </style>
        </head>
        <body>
            <header>
                <h1>Muhammad Muneeb</h1>
                <p>DevOps Engineer | Azure DevOps | AWS | Kubernetes | Terraform | GCP</p>
            </header>
            <div class="container">
                <img src="profile.jpg" alt="Profile Picture" class="profile-image">
                <div class="summary">
                    <p>
                        Possessing a Bachelor's Degree and armed with 3 years of hands-on experience in the dynamic realms of Networking, DevOps, and Cloud services. My passion lies in weaving intricate networks and architecting robust system solutions that harness the power of cloud technology.
                    </p>
                </div>
                <h2>Badges</h2>
                <div class="badges">
                    <div class="badge">
                        <img src="badge1.png" alt="CCNA: Introduction to Networks">
                        <p>CCNA: Introduction to Networks</p>
                    </div>
                    <div class="badge">
                        <img src="badge2.png" alt="Introduction to Cybersecurity">
                        <p>Introduction to Cybersecurity</p>
                    </div>
                    <div class="badge">
                        <img src="badge3.png" alt="CCNA: Switching, Routing">
                        <p>CCNA: Switching, Routing</p>
                    </div>
                </div>
            </div>
            <footer>
                <p>&copy; 2024 Muhammad Muneeb</p>
            </footer>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

});



