import express from 'express';
import currencyRouter from './routes/api/currencies.js';
import helmet from 'helmet';

const app = express();
app.use(express.json({ extended: false }));
app.use(helmet());
app.use('/api/currencies', currencyRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
