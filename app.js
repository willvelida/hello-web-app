const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/time', (req, res) => {
    const now = new Date();
    const locale = req.query.locale || 'en-AU';
    const timeZone = req.query.timeZone || 'Australia/Melbourne';
    const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Intl.DateTimeFormat(locale, options).format(now);
    res.json({ time: formattedDate });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});