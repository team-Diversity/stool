"use client"
import { Inter } from 'next/font/google';
import './globals.css';
import { loadVideo } from './loadURL.js';
// import Button from '../components/button'
import InputURL from '../components/inputURL'
import Video from '../components/video'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  const addVideo = (video) => {
    console.log(video)
    
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width"></meta>
        <title>Stool (Study Tool)</title>
        <link href="style.css" rel="stylesheet" type="text/css" />
      </head>

      <body>        
        <Video/>
        {/* <InputURL/> */}
        <InputURL onLoad={ addVideo }/>

      </body>

    </html>
  )
}
