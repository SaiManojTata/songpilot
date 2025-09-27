document.getElementById("play").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "play" });
});

document.getElementById("pause").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "pause" });
});

document.getElementById("next").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "next" });
});
