import express from 'express';
import cors from 'cors';

import 'dotenv/config';

import { logger } from './middleware/logger';
import { notFound } from './middleware/notFoundHandler';
import { errorHandler } from './middleware/errorHandler';
import { connectMongoDB } from './db/connectMongoDB';
import notesRouter from './routes/notesRoutes';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());
app.use(logger);

app.use(notesRouter);

app.use(notFound);
app.use(errorHandler);

await connectMongoDB();
app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}`);
});
