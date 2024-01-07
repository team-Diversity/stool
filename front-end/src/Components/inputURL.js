"use client"
import { useState } from 'react'

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

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div>
        <label htmlFor="urlInput">Enter Video URL:</label>
        <input type="text" id="urlInput" placeholder="Paste video link here" value={url} onChange ={(e) => setVideo(e.target.value)}/>
        <input type="submit" value='Load URL' className="btn btn-block"></input>
      </div>
    </form>
  )
}

export default InputURL