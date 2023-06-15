let MAX_TABS_COUNT = 3;

chrome.runtime.onInstalled.addListener(function(details) {
	if (details.reason === 'install') {
	  performOneTimeSetup();
	}
});

function performOneTimeSetup() {
	chrome.storage.local.set({ 'maxTabsCount': MAX_TABS_COUNT }, function() {});
}

chrome.tabs.onCreated.addListener(function(tab) {
  chrome.tabs.query({ windowId: chrome.windows.WINDOW_ID_CURRENT }, function(tabs) {
 		  	chrome.storage.local.get('maxTabsCount', function(result) {
				console.log('Values: ', tabs.length, result["maxTabsCount"]);
				let currentTabCount = tabs.length;
				let maxTabsCount = result["maxTabsCount"];
				if (currentTabCount > maxTabsCount) {
					chrome.tabs.remove(tab.id);	
				}
  	    });
  });
});

