alert('Content script inited');
console.log('Content script inited');

var body = document.querySelector('body');
body.style.backgroundColor = 'purple';

function createOverlay() {
	alert('Updated or created');
	console.log('Updated or created');
	var body = document.querySelector('body');
	body.style.backgroundColor = 'red';
}

chrome.tabs.onCreated.addListener(createOverlay);
chrome.tabs.onUpdated.addListener(createOverlay);
