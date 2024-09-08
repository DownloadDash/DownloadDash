function isValidURL(string) {
    const res = string.match(/(https?:\/\/[^\s]+)/g);
    return (res !== null);
}

function downloadVideo() {
    const videoLink = document.getElementById("videoLink").value;

    if (videoLink && isValidURL(videoLink)) {
        window.location.href = `/download?url=${encodeURIComponent(videoLink)}`;
    } else {
        alert("Please enter a valid video URL (e.g., https://example.com).");
    }
}
