const Video = ({url}) => {
    return (
        <div style={{width : '560px', height : '315px'}}>
            <h3>Embedded YouTube Video</h3>
            <iframe width="100%" height="100%" id="myVideo" alt="Refresh Browser" src={url} frameBorder="0" allowFullScreen></iframe>
        </div>
    )
}

export default Video