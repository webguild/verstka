$(window).ready(function(){

	//Календарь
	$.datepicker.regional['ru'] = {
	  closeText: 'Закрыть',
	  prevText: '&#x3c;Пред',
	  nextText: 'След&#x3e;',
	  currentText: 'Сегодня',
	  monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
	  'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	  monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
	  'Июл','Авг','Сен','Окт','Ноя','Дек'],
	  dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	  dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	  dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	  dateFormat: 'dd.mm.yy',
	  firstDay: 1,
	  isRTL: false
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']); 

  $('.date').datepicker({
    dateFormat: "dd-mm-yy",
    showOn: "button",
    buttonImage: "ico/calendar.png",
    buttonImageOnly: true,
    altField: ".date",
	altFormat: "d MM yy"
  });


  $(function () {
      $('select').selectbox();
      }); 

});