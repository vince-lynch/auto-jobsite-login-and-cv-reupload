
function initApp() {
 

  initMessaging();
	askBackgroundToOpenJobSiteTabs()
}



// When user open the window check if we are connected to fb
function askBackgroundToOpenJobSiteTabs(e) {
 chrome.extension.sendMessage({message: 'openTabs'});
}

// Inform user when facebook is connected
function initMessaging() {
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.facebookConnected === true){
        console.log('user has connected their facebook', request);
        document.getElementById('connected-facebook').textContent = 'True';
      }
    }
  );
}





window.onload = function() {
  initApp();
};
