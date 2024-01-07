const express = require('express');
const app = express();
const ytdl = require('ytdl-core')
const port = 4000;



var cors = require("cors");
app.use(cors());

app.get('/download', async (req, res) => {

  try {
      
      const url = req.query.url
      const videoId = await ytdl.getURLVideoID(url)
      const metaInfo = await ytdl.getInfo(url)
      
      
      let data = {
          url: 'https://www.youtube.com/embed/'+videoId,
          info: metaInfo.formats
      }
      
      
      const videoUrls = metaInfo.formats;
      

      const data1 = videoUrls.filter((video) => {
        return (
          video.mimeType === 'video/mp4; codecs="avc1.42001E, mp4a.40.2"' &&
          video.qualityLabel === '360p'
        );
      });
      
      
      
      const videoUrl = data1[0].url

      const axios = require('axios')

      const fs = require('fs');

      const path = require('path');

      const destination = path.join(__dirname, 'react.mp4'); // Replace with your desired file name and extension
      
      async function downloadVideo(videoUrl, destination) {
      try {
          const response = await axios({
          method: 'GET',
          url: videoUrl,
          responseType: 'stream',
          });

          // Pipe the response stream to a file
          response.data.pipe(fs.createWriteStream(destination));

          return new Promise((resolve, reject) => {
          response.data.on('end', () => resolve());
          response.data.on('error', (error) => reject(error));
          });
      } catch (error) {
        console.log("This is an error")
          console.error('Error:', error.message);
      }
      }

      // Call the function with the specified video URL and destination
      downloadVideo(videoUrl, destination)
      .then(() => console.log("Video downloaded successfully to ${destination}"))
      .catch((error) => console.error('Error:', error.message));

      return res.send(data)
  } catch(error) {
      return res.status(500)
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});