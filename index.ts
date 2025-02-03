import express from 'express';
import cors from 'cors';

import { classifyNumber } from './src/controllers/numController';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get("/api/classify-number", classifyNumber);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});