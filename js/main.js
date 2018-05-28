var page ={
  		init:function() {
  			var self = this;
  		
  			$('#collapseExample').on('hidden.bs.collapse', function () {
 						$('.tg-class i').toggleClass("fa-angle-down fa-angle-up");
				})
  			$('#collapseExample').on('show.bs.collapse', function () {
 						$('.tg-class i').toggleClass("fa-angle-down fa-angle-up");
				})
  			$('#rating').on('hidden.bs.collapse', function () {
 						$('.tg-servis i').toggleClass("fa-chevron-down fa-chevron-up");
				})
  			$('#rating').on('show.bs.collapse', function () {
 						$('.tg-servis i').toggleClass("fa-chevron-down fa-chevron-up");
				})
  			$('#language').on('hidden.bs.dropdown', function () {
 						$('#tg-lang i').toggleClass("fa-chevron-down fa-chevron-up");
				})
  			$('#language').on('shown.bs.dropdown', function () {
 						$('#tg-lang i').toggleClass("fa-chevron-down fa-chevron-up");
				})
  			$(".blockRaiting").on("click", function(){
  					self.close();
  				})
  			$(".card").on("click", function(){
  				let $url = "https://dry-springs-16299.herokuapp.com/score.php",
  				$score = $(this).attr("data-score"); 
  				$.ajax({
   	 				url: $url,        
    				data:{score:$score},
    				type: "POST",
    				success: function (data) {
    					console.log(data);
    					
    					self.closeAll();
$('#thankModal').modal('show');
    				}               
				});  				
  			})

  		},
  		close:function(){
        if($(".closeBlock").css("dicplay")!="block"){
          $(".closeBlock").hide(400, function(){
              $(".resume").css("padding-top", 20);
            });
        }
  			
  		},
  		closeAll: function(){
  			this.close();
  			$('.hidBlock').hide(400, function(){
  						$(".resume").css("padding-top", 20);
  					});

  		}
  		
}
 $( window ).on( "load", function() {
         page.init();
    });