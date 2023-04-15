//your JS code here. If required.
const browserInfo = document.getElementById('browser-info');

const browserName = navigator.appName;
const version = navigator.appVersion;

browserInfo.textContent = `You are using ${browserName} version ${version}.`;
