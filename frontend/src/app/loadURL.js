export function loadVideo() {
    // Check if the document object is available (only run in the browser)
  if (typeof document !== 'undefined') {
    // Get the input value
    // var videoUrl = document.getElementById("urlInput").value;
    var videoUrl = "https://www.youtube.com/embed/Bxagh8EG-ak?si=QvJrA-yV0wSEIX_k";
    
    // Set the src of iframe
    document.getElementById("myVideo").src = videoUrl;
  } else {
    console.error("This code should only run in a browser environment.");
  }
}