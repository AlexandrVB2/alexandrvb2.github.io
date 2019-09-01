//плавная прокрутка с отступом
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      headerHeight = 73;
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 900, function() {
          target.focus();
        });
        return false;
      }
     }
   });
   
//Мобильное меню
function mobilemenu() {
	let menu = document.getElementById('main_menu');
	if (menu.style.display === 'block') {
		menu.style.display = 'none';
  } else {
	menu.style.display = 'block';
  }
}

//Переход в форму
function transport(tarif) {
	document.getElementById('message').innerHTML = tarif;
	name_01.focus();
	}
