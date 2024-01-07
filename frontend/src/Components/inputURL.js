"use client"
import axios from 'axios';
import { useState } from 'react';

const InputURL = ({ onLoad }) => {
  const [url, setVideo] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!url) {
      alert('Please input URL')
      return
    }
    onLoad({ url })
    setVideo('')
  }


  // const axios = require("axios")
  const handleDownload = async () => {
    const data = await axios.get(
      `http://localhost:4000/download?url=${url}`
    );
      };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div>
        <label htmlFor="urlInput">Enter Video URL:</label>
        <input type="text" id="urlInput" placeholder="Paste video link here" value={url} onChange ={(e) => setVideo(e.target.value)}/>
        <input type="submit" value='Load URL' className="btn btn-block" onClick={handleDownload} ></input>
      </div>
    </form>
  )
}

export default InputURL