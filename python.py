from flask import Flask, request, jsonify
import pytube

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download_video():
    data = request.json
    video_url = data['videoURL']
    
    try:
        yt = pytube.YouTube(video_url)
        stream = yt.streams.get_highest_resolution()
        stream.download(output_path="downloads/")
        
        return jsonify({
            'success': True,
            'downloadUrl': f'/downloads/{stream.default_filename}'
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        })

if __name__ == "__main__":
    app.run(debug=True)
