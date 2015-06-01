(
	function () {
		
		var menuList = document.getElementById('menu_list');

		var menuIcon = document.getElementById('menu_icon');

		menuIcon.addEventListener('click', function (e) {
		
		    e.preventDefault();
		
		    menuList.classList.toggle('visible');
		});

	}

)();