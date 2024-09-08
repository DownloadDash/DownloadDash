const fetch = require('node-fetch');
const ytdl = require('ytdl-core');

exports.handler = async function(event, context) {
    const url = event.queryStringParameters.url;
    
    if (!ytdl.validateURL(url)) {
        return {
            statusCode: 400,
            body: 'Invalid video URL'
        };
    }

    const videoInfo = await ytdl.getInfo(url);
    const downloadUrl = ytdl.chooseFormat(videoInfo.formats, { quality: 'highest' }).url;
    
    return {
        statusCode: 200,
        body: JSON.stringify({ downloadUrl })
    };
};
