	$(document).ready((e)=>{
			$('.main-menu li').not('.submenu').click(function(){
				$('.submenu-list').hide(500);
			});	
			$('.submenu').click(function(){
				$('.submenu-list').toggle(500);
			});
			
			$('.bar-icon').click(function(){
				$('ul.main-menu').toggle(500);
			})

		});