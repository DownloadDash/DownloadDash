async function downloadVideo() {
    const videoLink = document.getElementById("videoLink").value;
    const progressBar = document.getElementById("progress-bar");
    const progress = progressBar.querySelector(".progress");

    if (videoLink === "") {
        alert("Please paste a video link.");
        return;
    }

    // Show progress bar
    progressBar.style.display = "block";

    try {
        // Simulating progress
        let width = 0;
        const interval = setInterval(() => {
            width += 10;
            progress.style.width = width + "%";
            if (width >= 100) {
                clearInterval(interval);
            }
        }, 500);

        // API call to get the download link (replace with actual API)
        const response = await fetch('https://api.video-downloader.com/fetch', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: videoLink })
        });
        const data = await response.json();

        if (data.status === 'success') {
            // Create a hidden anchor element to download the file
            const downloadLink = document.createElement('a');
            downloadLink.href = data.downloadUrl;
            downloadLink.setAttribute('download', '');
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } else {
            alert('Failed to fetch video. Please check the URL.');
        }
    } catch (error) {
        console.error('Error downloading the video:', error);
        alert('Error fetching the video. Please try again.');
    }
}
