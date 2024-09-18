document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-btn');
    const body = document.body;

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '🌞' : '🌙';
    });

    // Download button functionality
    const downloadBtn = document.getElementById('download-btn');
    const videoUrlInput = document.getElementById('video-url');
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.querySelector('.url-input-container').appendChild(resultDiv);

    downloadBtn.addEventListener('click', () => {
        const videoUrl = videoUrlInput.value.trim();
        const platform = document.querySelector('.social-media-logos img.selected')?.dataset.platform;

        if (!videoUrl || !platform) {
            resultDiv.textContent = 'Please select a platform and enter a valid URL.';
            resultDiv.style.color = 'red';
            return;
        }

        resultDiv.textContent = 'Processing...';
        resultDiv.style.color = 'black';

        // Simulate the download process
        setTimeout(() => {
            resultDiv.textContent = 'Download complete!';
            resultDiv.style.color = 'green';
        }, 2000);

        // To be replaced with actual download logic
        // fetch(`/download?platform=${platform}&url=${encodeURIComponent(videoUrl)}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         // Handle the response data
        //     });
    });

    // Social media selection
    document.querySelectorAll('.social-media-logos img').forEach(img => {
        img.addEventListener('click', () => {
            document.querySelector('.social-media-logos img.selected')?.classList.remove('selected');
            img.classList.add('selected');
            videoUrlInput.focus();
        });
    });
});
const response = await fetch('https://download-dash-backend.herokuapp.com/download', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ videoURL: url })
});
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('download-btn');
    const videoUrlInput = document.getElementById('video-url');
    const resultDiv = document.createElement('div');
    resultDiv.id = 'result';
    document.querySelector('.url-input-container').appendChild(resultDiv);

    downloadBtn.addEventListener('click', async () => {
        const videoUrl = videoUrlInput.value.trim();
        const platform = document.querySelector('.social-media-logos img.selected')?.dataset.platform;

        if (!videoUrl || !platform) {
            resultDiv.textContent = 'Please select a platform and enter a valid URL.';
            resultDiv.style.color = 'red';
            return;
        }

        resultDiv.textContent = 'Processing...';
        resultDiv.style.color = 'black';

        try {
            // Fetch request to your backend with the video URL and platform using the API key
            const response = await fetch('https://download-dash-backend.herokuapp.com/download', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer prj_mkslOSbRba6RuxVBlG07oeXHwEXq' // Add API Key here
                },
                body: JSON.stringify({
                    videoURL: videoUrl,
                    platform: platform
                })
            });

            const data = await response.json();
            if (response.ok) {
                resultDiv.textContent = 'Download complete!';
                resultDiv.style.color = 'green';
                // Handle the download data from the API
            } else {
                resultDiv.textContent = 'Error downloading the video. Please try again.';
                resultDiv.style.color = 'red';
            }
        } catch (error) {
            resultDiv.textContent = 'An error occurred. Please try again.';
            resultDiv.style.color = 'red';
            console.error('Error:', error);
        }
    });

    // Social media selection
    document.querySelectorAll('.social-media-logos img').forEach(img => {
        img.addEventListener('click', () => {
            document.querySelector('.social-media-logos img.selected')?.classList.remove('selected');
            img.classList.add('selected');
            videoUrlInput.focus();
        });
    });
});
