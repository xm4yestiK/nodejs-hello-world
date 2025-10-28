const http = require('http');
const port = 8080;

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My CI/CD App</title>
    <style>
        body {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background: linear-gradient(135deg, #1f2023, #2b2e35);
            color: #ffffff;
            display: grid;
            place-items: center;
            min-height: 90vh;
            margin: 0;
            text-align: center;
        }
        div.container {
            padding: 2.5rem 4rem;
            border-radius: 12px;
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
        }
        h1 {
            color: #00e1ff;
            margin-bottom: 0.75rem;
            text-shadow: 0 0 8px rgba(0, 225, 255, 0.3);
        }
        p {
            font-size: 1.15rem;
            color: #c0c0c0;
            max-width: 400px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello, CI/CD World!</h1>
        <p>This is the new frontend, served by Node.js!</p>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(htmlContent);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});