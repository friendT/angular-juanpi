app.controller('WorldCtrl', ['$css', 'worldSer', 'worldFac', "$scope", 'strSer', '$state', function ($css, worldSer, worldFac,$scope,strSer,$state) {
		var self = this;
		$scope.addGoods = function(){
			//strSer.addGoods(this.item);
			$state.go('substr',{id:JSON.stringify(this.item1)});
		}
		$css.add('./lib/swiper-3.3.1.min.css');
		worldFac.globals().then(function (res) {
			self.word = res.data.list;
		});
		worldFac.getlunbodata().then(function(res){
                self.dswiper=res.data.data.banner_ads;
                
                worldSer.lunbo();
        });
		
		
	}])
.controller('WorldtowCtrl',["$scope",'world2Fac' ,'$state', function ($scope,world2Fac,$state){
	var self = this;
	world2Fac.getsuju().then(function (res) {
			self.suju = res.data.data.aaa[0].goodsList;
		});
		$scope.addGoods = function(){
			//strSer.addGoods(this.item);
			$state.go('substr',{id:JSON.stringify(this.item)});
		}
	$('.nav_one').on('click','li',function(){
		$('.nav_one li').css("background",'#823bdf');
		$(this).css("background",'#cf7ff4');
	})
	
	$scope.f1 = function () {
	  var Y =	$('.baihuo').offset().top;
	  
	  $(document).scrollTop(Y-35);
	}
	$scope.f2 = function () {
	  var S =	$('.buyi').offset().top;
	  $(document).scrollTop(S-35);
	}
	$scope.f3 = function () {
	  var Z =	$('.jiaju').offset().top;
	 
	  $(document).scrollTop(Z-35);
	}
	$(document).on('scroll',function () { 
		try{
			var ZZ = $('.nav_one').offset().top
		}catch(e){
			console.log('大家好');
		}
		
		if( ZZ < $(document).scrollTop()){
			$('.nav_one').addClass('fudong');
		}
		if( $(document).scrollTop() < 195){
			$('.nav_one').removeClass('fudong');
		}
	})
}])