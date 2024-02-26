const express = require('express');
const app = express();
const http = require('http');
<<<<<<< HEAD
const cors = require('cors')
const path = require('path');
const helmet = require("helmet")
=======
const path = require('path');
>>>>>>> c11503bbc65891bf9fa02f21148612adb6df0866
const port = 8066;
// Use the whole root as static files to be able to serve the html file and
// the build folder
app.use(express.static(path.join(__dirname, '/')));
// Send html on '/'path
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, + '/index.html'));
})
<<<<<<< HEAD
app.use(
    helmet({
      xFrameOptions: { action: "deny" },
    })
);

app.use(cors());
=======
>>>>>>> c11503bbc65891bf9fa02f21148612adb6df0866
// Create the server and listen on port
http.createServer(app).listen(port, () => {
console.log(`Server running on localhost:${port}`);
});
