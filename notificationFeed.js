const apiKey = "AIzaSyC4wo0KvcckjI49FN49Q4y89gMa6dkNG5g";
const channelId = "UCFlJ1fAIKQBV_u2m-wu3VhQ"//"UC2eYFnH61tmytImy1mTYvhA";

function displayNotification(title) {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.innerText = title;
  document.body.appendChild(notification);
}
displayNotification("Hi");