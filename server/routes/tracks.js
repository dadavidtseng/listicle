/**
 * ---------------------------------------------------------------------------------------------------
 * tracks.js
 * 
 * @module server.routes
 * ---------------------------------------------------------------------------------------------------
 */

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import TracksController from '../controllers/tracks.js'
import { pool } from '../config/database.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', TracksController.getTracks)
router.get('/search', TracksController.searchTracks)

router.get('/:trackId', async (req, res) => {
    const id = parseInt(req.params.trackId)

    if (isNaN(id)) {
        return res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'))
    }

    try {
        const result = await pool.query('SELECT id FROM tracks WHERE id = $1', [id])

        if (result.rows.length > 0) {
            res.status(200).sendFile(path.resolve(__dirname, '../public/track.html'))
        } else {
            res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'))
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

export default router
