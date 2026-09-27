/**
 * ---------------------------------------------------------------------------------------------------
 * reset.js
 * 
 * @module server.config
 * ---------------------------------------------------------------------------------------------------
 */

import { pool } from './database.js'
// import dotenv from './dotenv.js'
import trackData from '../data/tracks.js'

const createTableQuery = `
    DROP TABLE IF EXISTS tracks;

    CREATE TABLE IF NOT EXISTS tracks (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        artist VARCHAR(255) NOT NULL,
        image TEXT NOT NULL,
        description TEXT NOT NULL,
        duration VARCHAR(10) NOT NULL,
        addedIn VARCHAR(255) NOT NULL,
        rarity VARCHAR(50) NOT NULL,
        foundIn TEXT NOT NULL
    )
`

const createTracksTable = async () => {
    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 tracks table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating tracks table', err)
    }
}

const seedTracksTable = async () => {
    await createTracksTable()

    trackData.forEach((track) => {
        const insertQuery = {
            text: 'INSERT INTO tracks (name, artist, image, description, duration, addedIn, rarity, foundIn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
        }

        const values = [
            track.name,
            track.artist,
            track.image,
            track.description,
            track.duration,
            track.addedIn,
            track.rarity,
            track.foundIn
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting track', err)
                return
            }
            console.log(`✅ ${track.name} added successfully`)
        })
    })
}

seedTracksTable()