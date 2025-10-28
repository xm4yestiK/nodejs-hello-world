const http = require('http');
const port = 8080;

// Konten HTML disederhanakan, semua <style> dihapus
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My CI/CD App</title>
</head>
<body>
    <h1>Hello, CI/CD World!</h1>
    <p>This is the new frontend, served by Node.js!</p>
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