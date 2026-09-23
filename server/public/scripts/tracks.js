const renderTracks = async () => {
    const response = await fetch('/tracks')
    const data = await response.json()
    const trackList = document.getElementById('track-list')

    if (data && data.length > 0) {
        data.forEach(track => {
            const card = document.createElement('article')
            card.classList.add('track-card')

            const img = document.createElement('img')
            img.src = track.image
            img.alt = track.name
            card.appendChild(img)

            const name = document.createElement('h3')
            name.textContent = track.name
            card.appendChild(name)

            const artist = document.createElement('p')
            artist.textContent = `Artist: ${track.artist}`
            card.appendChild(artist)

            const rarity = document.createElement('p')
            rarity.innerHTML = `Rarity: <mark>${track.rarity}</mark>`
            card.appendChild(rarity)

            const link = document.createElement('a')
            link.href = `/tracks/${track.id}`
            link.role = 'button'
            link.textContent = 'View Details'
            card.appendChild(link)

            trackList.appendChild(card)
        })
    } else {
        const message = document.createElement('p')
        message.textContent = 'No music discs found.'
        trackList.appendChild(message)
    }
}

renderTracks()
