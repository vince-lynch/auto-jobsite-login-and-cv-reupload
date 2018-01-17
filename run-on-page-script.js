$( document ).ready(function() {
	console.log('EXTENSION running on page')
	
	if(window.location.href.indexOf('totaljobs') > -1){
		console.log('on TotalJobs.com - stimulating click')
		setTimeout(function(){
			$( "#btnSave" ).trigger( "click" );
		},5000)
		
	}
	
	if(window.location.href.indexOf('jobsite') > 1){
		console.log('on jobSite.co.uk stimulating click')
		setTimeout(function(){
			$( ".form-submit" ).trigger( "click" );
		},5000)
	}
	
	
	if(window.location.href.indexOf('cv-library') > 1){
		console.log('on cv-library stimulating click')
		setTimeout(function(){
			$('input[value="Save All Changes"]').trigger( "click" );
		},5000)
	}
	
	if(window.location.href.indexOf('indeed') > 1){
		console.log('on indeed stimulating click')
		setTimeout(function(){
			$('.edit-button').trigger( "click" );
		},2000)
	}
	
	if(window.location.href.indexOf('reed') > 1){
		console.log('on REED.co.uk stimulating click')
		setTimeout(function(){
			$('.btn.btn-primary.save-changes').trigger( "click" );
		},5000)
	}
	
});

