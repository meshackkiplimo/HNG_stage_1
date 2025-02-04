import express from 'express';
import cors from 'cors';
import { classifyNumber } from './src/controllers/numController';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: "*", 
  methods: ["GET"], 
  allowedHeaders: ["Content-Type"],
}));


app.get('/', (req, res) => {
  res.json({ 
    message: 'Server is running', 
    endpoints: ['/api/classify-number?number=371']
  });
});


app.get("/api/classify-number", classifyNumber);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
