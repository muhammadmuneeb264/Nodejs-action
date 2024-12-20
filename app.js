const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;

// Serve the homepage with HTML content
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to My Website</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f3f4f6; color: #333; }
                header { background-color: #4CAF50; color: white; padding: 1rem; text-align: center; }
                .container { padding: 2rem; max-width: 800px; margin: 0 auto; }
                h1 { color: #4CAF50; }
                p { font-size: 1.1rem; line-height: 1.6; }
                .button-container { margin-top: 1.5rem; }
                .button { 
                    display: inline-block; 
                    padding: 10px 20px; 
                    font-size: 1rem; 
                    color: #fff; 
                    text-decoration: none; 
                    border-radius: 5px; 
                    transition: background-color 0.3s ease; 
                    margin-right: 10px;
                }
                .button.contact { background-color: #007BFF; }
                .button.learn { background-color: #28a745; }
                .button:hover { opacity: 0.8; }
                footer { background-color: #333; color: #fff; text-align: center; padding: 1rem; position: fixed; width: 100%; bottom: 0; }
            </style>
        </head>
        <body>
            <header>
                <h1>Welcome to My Website</h1>
            </header>
            <div class="container">
                <h2>About Me</h2>
                <p>This is Muhammad Zubair, a DevOps Engineer from Technyx System. Welcome to my website!</p>

                <h2>What I Do</h2>
                <p>I specialize in deploying and managing applications in cloud environments, automating deployment pipelines, and ensuring smooth operations for production applications.</p>

                <div class="button-container">
                    <a href="mailto:muneeb@example.com" class="button contact">Contact Me</a>
                    <a href="#learn-more" class="button learn">Learn More</a>
                </div>

                <h2 id="learn-more" style="margin-top: 2rem;">Learn More About My Work</h2>
                <p>Explore my experience in DevOps, cloud deployments, and automated pipelines. I’m dedicated to delivering efficient solutions for scalable and resilient systems.</p>
            </div>
            <footer>
                <p>&copy; 2024 Muhammad Muneeb | Technyx System</p>
            </footer>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});



