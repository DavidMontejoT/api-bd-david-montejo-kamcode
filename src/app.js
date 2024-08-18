// Importa las dependencias
import express from "express";
import cors from 'cors';
import artistRoutes from './routes/artist.routes.js';
import songsRoutes from './routes/songs.routes.js';

// Inicializa la aplicación de Express
const app = express();

// Usa middlewares
app.use(cors()); // Ahora puedes usar cors después de inicializar `app`
app.use(express.json());

// Rutas
app.use(songsRoutes);
app.use(artistRoutes);

// Exporta la aplicación
export default app;
