const apiKey = "AIzaSyC4wo0KvcckjI49FN49Q4y89gMa6dkNG5g";
const channelId = "UCFlJ1fAIKQBV_u2m-wu3VhQ"//"UC2eYFnH61tmytImy1mTYvhA";
let latestVideoId = "";

function checkForNewVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const videoId = data.items[0].id.videoId;
      if (latestVideoId !== videoId) {
        latestVideoId = videoId;
        const title = data.items[0].snippet.title;
        displayNotification(title);
      }
    })
    .catch((error) => console.error(error));
}

function displayNotification(title) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = title;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 5000);
}

checkForNewVideos();
setInterval(checkForNewVideos, 60000);
