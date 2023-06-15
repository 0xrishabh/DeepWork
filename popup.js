let MAX_TABS_COUNT = 3;
// Switch on & off


chrome.storage.local.get('maxTabsCount', function(result) {
  let maxTabsCount = result["maxTabsCount"];
  document.getElementsByClassName('switch')[0].innerHTML = maxTabsCount == MAX_TABS_COUNT ? "OFF" : "ON";
});

document.getElementsByClassName('switch')[0].addEventListener('click', function(e) {
    chrome.storage.local.get('maxTabsCount', function(result) {
        let maxTabsCount = result["maxTabsCount"];
        let switchValue = maxTabsCount == MAX_TABS_COUNT ? 10e6 : MAX_TABS_COUNT;
        chrome.storage.local.set({ 'maxTabsCount': switchValue }, function() {});
        focusSwitch.innerHTML = maxTabsCount == MAX_TABS_COUNT ? "OFF" : "ON";
    });
    
});