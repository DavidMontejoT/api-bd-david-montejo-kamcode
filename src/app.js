import express from "express"; 
import artistRoutes from './routes/artist.routes.js'
import songsRoutes from './routes/songs.routes.js'

const app = express();
//middlewares
app.use(express.json());
app.use(songsRoutes)


app.use(artistRoutes)
export default app;