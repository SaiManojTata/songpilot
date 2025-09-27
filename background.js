chrome.runtime.onInstalled.addListener(() => {
  console.log("Songpilot Extension installed");
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Message received:", request);

  if (request.action === "play") {
    console.log("Would trigger Spotify Play here");
  } else if (request.action === "pause") {
    console.log("Would trigger Spotify Pause here");
  } else if (request.action === "next") {
    console.log("Would trigger Spotify Next here");
  }
});