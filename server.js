const http = require('http');
const port = 3000;
const stats = require('./pcRamUsage');

http
  .createServer((req, res) => {
    let url = req.url;

    if (url === '/stats') {
      res.end(JSON.stringify(stats, null, 2));
    } else {
      res.end('<h1>Welcome!</h1>');
    }
})
.listen(port, () => console.log(`Server is running in http://localhost:${port}`));
