
jQuery(function() {
	//IE 7, 8
	if(!$.support.opacity) {
	
		$('input[type="radio"]').click(function(event) {
			$this = $(this);
			$this.addClass('checked').parent().hide().show();
			$('input:radio[name="' + $this.attr('name') + '"]').not(this).removeClass('checked').parent().hide().show();
		}).each(function() {
			$this = $(this);
			if($this.is(':checked')) {
				$this.addClass('checked');
				$('body').height('auto');
			}
		});
	} 
	
	/*if ($.browser.msie && $.browser.version < 8) {
		$('.button').append('<span/><span/>');
	}*/
});