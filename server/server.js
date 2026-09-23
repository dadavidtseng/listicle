import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import tracksRouter from './routes/tracks.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')))
app.use('/tracks', tracksRouter)

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, 'public/index.html'))
})

app.use((req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, 'public/404.html'))
})

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
