const renderDetail = async () => {
    const trackId = parseInt(window.location.pathname.split('/').pop())
    const response = await fetch('/tracks')
    const data = await response.json()
    const track = data.find(t => t.id === trackId)

    if (track) {
        document.title = `${track.name} - Minecraft Music Discs`
        document.getElementById('track-image').src = track.image
        document.getElementById('track-image').alt = track.name
        document.getElementById('track-name').textContent = track.name
        document.getElementById('track-artist').textContent = `Artist: ${track.artist}`
        document.getElementById('track-duration').textContent = `Duration: ${track.duration}`
        document.getElementById('track-rarity').innerHTML = `Rarity: <mark>${track.rarity}</mark>`
        document.getElementById('track-added').textContent = `Added In: ${track.addedIn}`
        document.getElementById('track-found').textContent = `Found In: ${track.foundIn}`
        document.getElementById('track-description').textContent = track.description
    } else {
        window.location.href = '/404'
    }
}

renderDetail()
