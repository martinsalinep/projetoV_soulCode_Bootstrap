/* Para seta de rolagem na página inicial*/

$('#setaTop').hide()

$(window).scroll(function () {
  let rolagem = $(document).scrollTop()

  if (rolagem >= 220) {
    $('#setaTop').show('slow')
  } else if (rolagem < 220) {
    $('#setaTop').hide()
  }
})