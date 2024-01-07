import { Inter } from 'next/font/google';
import './globals.css';
import { loadVideo } from './loadURL.js';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stool (Study Tool)',
  description: 'Study Tool using OpenAi API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width"></meta>
        <title>Stool (Study Tool)</title>
        <link href="style.css" rel="stylesheet" type="text/css" />
      </head>

      <body>
        <h1>Embedded YouTube Video</h1>
        
        <div style={{width : '560px', height : '315px'}}>
          <iframe width="100%" height="100%" id="myVideo" alt="Refresh Browser" src="" frameBorder="0" allowFullScreen></iframe>
        </div>

        <div>
          <p>Only works with (Share Copy Embed Link) for now</p>
          <label htmlFor="urlInput">Enter Video URL:</label>
          <input type="text" id="urlInput" placeholder="Paste video link here"></input>
          <button onClick={loadVideo()}>Load Video</button>
        </div>
      </body>

    </html>
  )
}
