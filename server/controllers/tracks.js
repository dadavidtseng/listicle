/**
 * ---------------------------------------------------------------------------------------------------
 * tracks.js
 * 
 * @module server.controllers
 * ---------------------------------------------------------------------------------------------------
 */

import { pool } from '../config/database.js'

const getTracks = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM tracks ORDER BY id ASC')

        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const searchTracks = async (req, res) => {
    const { q } = req.query

    if (!q) {
        return res.status(200).json([])
    }

    try {
        const results = await pool.query(
            `SELECT * FROM tracks
             WHERE name ILIKE $1 OR artist ILIKE $1 OR rarity ILIKE $1
             ORDER BY id ASC`,
            [`%${q}%`]
        )
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getTracks,
    searchTracks
}