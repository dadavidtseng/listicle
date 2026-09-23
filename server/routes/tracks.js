import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import trackData from '../data/tracks.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(trackData)
})

router.get('/:trackId', (req, res) => {
    const id = parseInt(req.params.trackId)
    const track = trackData.find(t => t.id === id)

    if (track) {
        res.status(200).sendFile(path.resolve(__dirname, '../public/track.html'))
    } else {
        res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'))
    }
})

export default router
