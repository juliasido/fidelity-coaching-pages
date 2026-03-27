const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = '/Users/juliabarbosa_1/Documents/ClaudCode/Portfolio/CoachingLandingPages';
const MIME = { '.html':'text/html', '.png':'image/png', '.jpg':'image/jpeg', '.css':'text/css', '.js':'text/javascript' };
http.createServer((req, res) => {
  let f = path.join(ROOT, decodeURIComponent(req.url === '/' ? '/coaching_landing_pages.html' : req.url));
  fs.readFile(f, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, {'Content-Type': MIME[path.extname(f)] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(8743, () => console.log('Serving on 8743'));
