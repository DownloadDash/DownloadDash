async function downloadVideo() {
            const videoLink = document.getElementById("videoLink").value;
            if (isValidURL(videoLink)) {
                try {
                    const response = await fetch(`https://api.example.com/download?url=${encodeURIComponent(videoLink)}`);
                    const blob = await response.blob();
                    const downloadUrl = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = downloadUrl;
                    a.download = 'video.mp4';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                } catch (error) {
                    alert("Failed to download the video. Please try again.");
                }
            } else {
                alert("Please enter a valid video URL.");
            }
        }

        function isValidURL(url) {
            const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
                '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
            return !!pattern.test(url);
        }
    </script>
