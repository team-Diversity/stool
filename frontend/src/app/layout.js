"use client"
import { useState } from 'react'
import { Inter } from 'next/font/google';
import './globals.css';
import InputURL from '../components/inputURL'
import Video from '../components/video'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [newUrl, setNewUrl] = useState('');

  const addVideo = ( vidUrl ) => {
    console.log(vidUrl)
    setNewUrl(vidUrl['url']);
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
        <Video  url={ newUrl }/>
        <InputURL onLoad={ addVideo }/>
      </body>

    </html>
  )
}

