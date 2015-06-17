(function ( $ ) {
 	
	
	
	$.fn.prioritize = function( options ){
		
		$.fn.prioritize.defaults = {
				    more: "More&hellip;",
					less: "Less&hellip;"
		};
		
	// Extend our default options with those provided.
	    // Note that the first argument to extend is an empty
	    // object – this is to keep from overriding our "defaults" object.
	    var opts = $.extend( {}, $.fn.prioritize.defaults, options );
		
		return this.each(function() {
			
			var element  = this;
		       	
			$(element).addClass("prioritized");
			
			$('li[data-priority="0"]',element).addClass("demoted");
	
			checkWidth(element);
	
			$( window ).resize(function() {
								
				$(element).removeClass("truncated");
		
				$('li[data-priority="more"], li[data-priority="less"]',element).remove();
		
				$('li:not([data-priority="0"])',element).removeClass("demoted");
				
				checkWidth(element);
				
			});
				
		});
		


		function checkWidth(element) {
			
			var t=0;
			
			//calculate the width of the visible <li>s
			$(element).children().not(".demoted").outerWidth(function(i,w){t+=w;});
			
			console.log("element-width: " + $(element).width() + ", content-width: " + t);
			
			if ($(element).width() < t ){

				if ( !$('li[data-priority="more"]',element).length ){
					$(element).append('<li data-priority="more"><a href="#">' + opts.more + '</a></li><li data-priority="less"><a href="#">' + opts.less + '</a></li>');
					//console.log("no");
				} 
				
				hideTheHeighest(element);
								
				moreOrLess(element, options);

			} 
		}
		
		
		function moreOrLess(element, options) {

			$('li[data-priority="more"] a', element).on( "click", function() {
				//console.log("click");
		  	  	$(this).parents("ul").addClass("opened");
  	
			});

			$('li[data-priority="less"] a', element).on( "click", function() {
				//console.log("click");
		  	  	$(this).parents("ul").removeClass("opened");
		  	  	$('li:not([data-priority="0"])',element).removeClass("demoted");
				checkWidth(element);
			});

		}
		

		function hideTheHeighest(element){
			
			$(element).addClass("truncated");
			
			var max = 0, index = 0;
			$('.truncated > *:not(.demoted)').each(function(i){
			   if(parseInt($(this).data('priority'), 10) > max){
			      max = parseInt($(this).data('priority'), 10);
			      index = i;
			   }
			}).eq(index).addClass("demoted");

			checkWidth(element);
		}
	}


}( jQuery ));