import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import openaiRoutes from './routes/openaiRoutes.ts';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// > Use openaiRoutes for all API requests
app.use('/api', openaiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
