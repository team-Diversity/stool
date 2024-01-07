"use client";
import { Inter } from 'next/font/google';
import { useState } from 'react';
import './globals.css';



const inter = Inter({ subsets: ['latin'] })


export default function SearchBar({ children }) {

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    // Update the state with the new value
    setValue(event.target.value);
  };


  return (
    <html lang="en">
      <div className='yes'>
        <label style={{ marginLeft: '-10px' }}>URL:</label>
      <input type="text" id="myInput" 
      value={value}
      onChange={handleChange}
      placeholder="Paste the link of the Video"
      ></input>
      <button className='button' >SUBMIT</button>
 
    </div>
    </html>
  )
}
