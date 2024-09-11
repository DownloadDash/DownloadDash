function downloadVideo() {
    const videoLink = document.getElementById("videoLink").value;
    const progressBar = document.getElementById("progress-bar");
    const progress = progressBar.querySelector(".progress");

    if (videoLink) {
        progressBar.style.display = "block";
        progress.style.width = "0%";

        fetch(`https://your-site.netlify.app/.netlify/functions/download?url=${encodeURIComponent(videoLink)}`)
            .then(response => response.json())
            .then(data => {
                if (data.downloadUrl) {
                    progress.style.width = "100%";
                    setTimeout(() => {
                        window.location.href = data.downloadUrl;
                    }, 500);
                } else {
                    alert('Invalid video URL');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                progressBar.style.display = "none";
            });
    } else {
        alert("Please enter a valid video URL.");
    }
}
