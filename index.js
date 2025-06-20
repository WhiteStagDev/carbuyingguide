function toggleToc() {
  const list = document.getElementById("toc-list");
  const button = document.getElementById("toggle-btn");
  const isHidden = list.style.display === "none" || list.style.display === "";

  list.style.display = isHidden ? "block" : "none";
  button.textContent = isHidden ? "▲" : "▼";
}

function toggleExtraInfoByElement(button) {
  const targetId = button.getAttribute("data-target");
  const info = document.getElementById(targetId);
  const isHidden = info.style.display === "none" || info.style.display === "";

  info.style.display = isHidden ? "inline" : "none";
  button.textContent = isHidden ? "✖" : "More Details 💡";
}

function toggleExtraLinks(button) {
  const targetId = button.getAttribute("data-target");
  const info = document.getElementById(targetId);
  const isHidden = info.style.display === "none" || info.style.display === "";

  info.style.display = isHidden ? "inline" : "none";
  button.textContent = isHidden ? "✖" : "Click Here!";
}