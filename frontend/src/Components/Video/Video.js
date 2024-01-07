import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'

function Video( {url} ) {
    return (
      <VideoStyled>
        <div class="video-section" >
            <iframe width="100%" height="100%" id="myVideo" alt="Refresh Browser" src={url} allowFullScreen></iframe>
        </div>
      </VideoStyled>
    )
}

const VideoStyled = styled.div`
  background-color: #FFFFFF;

  .video-section {
      box-sizing: border-box; // Include padding and border in the width
      border: 2px solid #1D4B55; // Darker border
      border-radius: 10px;
      padding: 20px;
      margin: 10px;
      width: calc(100% - 40px); // Adjust for padding and margin
      height: 90%;
      // Add styles for video element if needed
  }
`;

export default Video;
