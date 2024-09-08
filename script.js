function downloadVideo() {
    const videoLink = document.getElementById("videoLink").value;

    if (videoLink) {
        // Redirect to a third-party downloader service (example)
        window.open(`https://www.y2mate.com/youtube/${encodeURIComponent(videoLink)}`, '_blank');
    } else {
        alert("Please enter a valid video URL.");
    }
}

document.getElementById("downloadBtn").addEventListener("click", downloadVideo);
