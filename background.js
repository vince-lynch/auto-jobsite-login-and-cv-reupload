

function openTabs(arrayOfURLs){
	for (var i in arrayOfURLs) {
		var url = arrayOfURLs[i];
		chrome.tabs.create({url: url}, function(tab){
			if(tab != undefined){
				closeIn(url, 15);
			}
		})
	}
}


function closeIn(url, secs){
	setTimeout(function(){
		chrome.tabs.query({}, function(tabs){
			if(tabs){
				tabs.forEach(function(tab) {
					if(tab.index > 1){
						chrome.tabs.remove(tab.id) // remove tab by id
					}
				});
			}
		})
	}, (secs * 1000))
}

function tellTabsToVisit(){
	openTabs([
		'https://www.reed.co.uk/account#&card=personal-statement-edit',
		//'https://www.totaljobs.com/Authenticated/Profile.aspx#cv',
		//'https://www.jobsite.co.uk/cgi-bin/myjobsite_cv_management.cgi?src=qlCvAndletters',
		//'https://www.cv-library.co.uk/candidate/modify-account',
		//'https://my.indeed.com/resume' // cant currently get jQuery click to work on indeed
	])
}


function initApp() {
	// inside incognito
	//if(chrome.extension.inIncognitoContext) {
		//console.log('is inside incognito')
		setInterval(function(){
			tellTabsToVisit()
		},20000);
	//}


	// MESSAGING //
	chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
		console.log("frontend is sending a message");
		

		
	})

}



window.onload = function() {
  initApp();
};
