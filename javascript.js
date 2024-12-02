// Function to fetch video results from YouTube API
async function searchVideos(query) {
    const apiKey = 'AIzaSyDqS2AoyDCRPOPmRzdCWFVYUt5sN5XBf5E'; // Replace with your YouTube API key
    const maxResults = 5; // Number of video results you want
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${apiKey}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.items; // This contains the list of video results
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
}

// Usage example
searchVideos('JavaScript tutorial').then(videos => {
    videos.forEach(video => {
        console.log(`Title: ${video.snippet.title}`);
        console.log(`Video Link: https://www.youtube.com/watch?v=${video.id.videoId}`);
    });
});
