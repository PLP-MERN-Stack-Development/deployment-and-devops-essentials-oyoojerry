const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

app.use(helmet()); // secure headers
app.use(morgan('combined')); // logging
app.use(express.json({ limit: '10kb' }));

const limiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
app.use('/api', limiter);
