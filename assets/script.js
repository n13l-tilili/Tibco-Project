function openTab(tabId) {
  const tabs = document.querySelectorAll('.tabcontent');
  tabs.forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}
