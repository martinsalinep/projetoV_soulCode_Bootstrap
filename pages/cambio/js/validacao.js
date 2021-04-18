/* >>>>>>>> VALIDAÇÕES <<<<<<<<< */

/* Validações gerais */

/* Aceitar apenas valores numéricos */

$('#formTelefoneCambio, #formValorCambio').keydown(function (elemento) {

  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105 ||
    elemento.keyCode == 8 || elemento.keyCode == 46) {
    return true
  } else {
    return false
  }
})

/* Não aceitar valores numéricos */

$('#formNomeCambio').keydown(function (elemento) {
  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105) {
    return false
  }
})

/* Verificação do email */

$('#formEmailCambio').blur(function () {
  let field = $('#formEmailCambio').val();
  usuario = field.substring(0, field.indexOf("@"));
  dominio = field.substring(field.indexOf("@") + 1, field.length);
  if ((usuario.length >= 1) &&
    (dominio.length >= 3) &&
    (usuario.search("@") == -1) &&
    (dominio.search("@") == -1) &&
    (usuario.search(" ") == -1) &&
    (dominio.search(" ") == -1) &&
    (dominio.search(".") != -1) &&
    (dominio.indexOf(".") >= 1) &&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
    $('#formEmailCambio').removeClass('border-danger')
  } else {
    $('#formEmailCambio').addClass('border-danger')
  }
})

/* Validação de campos preenchidos */

$('#btnFormCambio').click(function () {
  if ($('#formNomeCambio').val() !== null && $('#formEmailCambio').val() !== null
    && $('#formTelefoneCambio').val() !== null && $('#formMoedaEntradaCambio').val() !== null
    && $('#formMoedaSaidaCambio').val() !== null && $('#formValorCambio').val() !== null) {
    $('#btnFormCambio').attr({
      'data-toggle': 'modal',
      'data-target': '#cotacaoConfirmada'
    })
  } else {
    $('#btnFormCambio').attr({
      'data-toggle': 'modal',
      'data-target': '#preencherCampos'
    })
  }
})