import express, { Request, Response } from 'express';
import cors from 'cors';
import sequelize from 'config/database';

const app = express();

app.use(cors());

app.use(express.json());

app.get('/health', async (_req: Request, res: Response) => {
  res.status(200).send('Server is online!');
});

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

export default app;
