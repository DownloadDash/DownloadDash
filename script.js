function downloadVideo() {
    const videoLink = document.getElementById("videoLink").value;

    if (videoLink) {
        fetch(`https://your-site.netlify.app/.netlify/functions/download?url=${encodeURIComponent(videoLink)}`)
            .then(response => response.json())
            .then(data => {
                if (data.downloadUrl) {
                    window.location.href = data.downloadUrl;
                } else {
                    alert('Invalid video URL');
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert("Please enter a valid video URL.");
    }
}
