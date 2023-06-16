let MAX_TABS_COUNT = 3;
// Switch on & off

chrome.storage.local.get('maxTabsCount', function(result) {
  let maxTabsCount = result["maxTabsCount"];
  updateUI(maxTabsCount);
});

document.getElementsByClassName('switch')[0].addEventListener('click', function(e) {
  getValue(function(result) {
        let maxTabsCount = result["maxTabsCount"];
        let switchValue = maxTabsCount == MAX_TABS_COUNT ? 10e6 : MAX_TABS_COUNT;
        updateUI(switchValue);
        setValue(switchValue, function() {});
    });
    
});

function updateUI(maxTabsCount) {
  document.getElementsByClassName('switch')[0].textContent = maxTabsCount == MAX_TABS_COUNT ? "OFF" : "ON";
}
function getValue(callback){
    chrome.storage.local.get('maxTabsCount', callback);
}
function setValue(value, callback){
    chrome.storage.local.set({ 'maxTabsCount': value }, callback);
}
