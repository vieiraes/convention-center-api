import { startServer } from './server/server.js';
import { connectDb } from './database/databaseConnection.js'
import { app } from './server/server.js'
import { stationsRouter } from './routes/stationsRoutes.js';
import { statusRouter } from './routes/statusRoutes.js'
import { PersonRouter } from './Person/PersonRoutes.js'

function bootstrap() {
    startServer()
    connectDb()
}
bootstrap()

// app.get('/status', (req, res) => {
//     res.status(200).json({ "message": 'ok' })
// })

app.use('/station', stationsRouter)
app.use('/status', statusRouter)
app.use('/person', PersonRouter)
// app.use('/lectures', lecturesRouter)
// app.use('/status', presentersRouter)