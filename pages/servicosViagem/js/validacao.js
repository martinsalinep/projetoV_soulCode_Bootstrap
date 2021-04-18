/* Validação Seguro Saúde */

/* Validações gerais */

/* Aceitar apenas valores numéricos */

$('#quantidadeSeguro, #telefoneSeguro').keydown(function (elemento) {

  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105 ||
    elemento.keyCode == 8 || elemento.keyCode == 46) {
    return true
  } else {
    return false
  }
})

/* Não aceitar valores numéricos */

$('#formSeguroNome').keydown(function (elemento) {
  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105) {
    return false
  }
})

/* Verificação do email */

$('#emailSeguro').blur(function () {
  let field = $('#emailSeguro').val();
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
    $('#emailSeguro').removeClass('border-danger')
  } else {
    $('#emailSeguro').addClass('border-danger')
  }
})

/* Validação de campos preenchidos */

$('#btnCotacaoSeguro').click(function () {
  if ($('#destinoSeguro').val() !== null && $('#motivoSeguro').val() !== null
    && $('#quantidadeSeguro').val() !== null && $('#quantidadeSeguro').val() > 0
    && $('#formSeguroNome').val() !== null && $('#dataViagemSeguro').val() !== null 
    && $('#emailSeguro').val() !== null  && $('#telefoneSeguro').val() !== null) {
    $('#btnCotacaoSeguro').attr({
      'data-toggle': 'modal',
      'data-target': '#cotacaoConfirmada'
    })
  } else {
    $('#btnCotacaoSeguro').attr({
      'data-toggle': 'modal',
      'data-target': '#preencherCampos'
    })
  }
})

/* Validação Cartão Multimoedas */

/* Validações gerais */

/* Aceitar apenas valores numéricos */

$('#quantidadeCartao, #telefoneCartao').keydown(function (elemento) {

  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105 ||
    elemento.keyCode == 8 || elemento.keyCode == 46) {
    return true
  } else {
    return false
  }
})

/* Não aceitar valores numéricos */

$('#formCartaoNome').keydown(function (elemento) {
  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105) {
    return false
  }
})

/* Verificação do email */

$('#emailCartao').blur(function () {
  let field = $('#emailCartao').val();
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
    $('#emailCartao').removeClass('border-danger')
  } else {
    $('#emailCartao').addClass('border-danger')
  }
})

/* Validação de campos preenchidos */

$('#btnCotacaoCartao').click(function () {
  if ($('#destinoCartao').val() !== null && $('#motivoCartao').val() !== null
    && $('#quantidadeCartao').val() !== null && $('#quantidadeCartao').val() > 0
    && $('#formCartaoNome').val() !== null && $('#dataViagemCartao').val() !== null 
    && $('#emailCartao').val() !== null  && $('#telefoneCartao').val() !== null) {
    $('#btnCotacaoCartao').attr({
      'data-toggle': 'modal',
      'data-target': '#cotacaoConfirmada'
    })
  } else {
    $('#btnCotacaoCartao').attr({
      'data-toggle': 'modal',
      'data-target': '#preencherCampos'
    })
  }
})

/* Validação Chip Internacional */

/* Validações gerais */

/* Aceitar apenas valores numéricos */

$('#quantidadeChip, #telefoneChip').keydown(function (elemento) {

  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105 ||
    elemento.keyCode == 8 || elemento.keyCode == 46) {
    return true
  } else {
    return false
  }
})

/* Não aceitar valores numéricos */

$('#formChipNome').keydown(function (elemento) {
  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105) {
    return false
  }
})

/* Verificação do email */

$('#emailChip').blur(function () {
  let field = $('#emailChip').val();
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
    $('#emailChip').removeClass('border-danger')
  } else {
    $('#emailChip').addClass('border-danger')
  }
})

/* Validação de campos preenchidos */

$('#btnCotacaoChip').click(function () {
  if ($('#destinoChip').val() !== null && $('#motivoChip').val() !== null
    && $('#quantidadeChip').val() !== null && $('#quantidadeChip').val() > 0
    && $('#formChipNome').val() !== null && $('#dataViagemChip').val() !== null 
    && $('#emailChip').val() !== null  && $('#telefoneChip').val() !== null) {
    $('#btnCotacaoChip').attr({
      'data-toggle': 'modal',
      'data-target': '#cotacaoConfirmada'
    })
  } else {
    $('#btnCotacaoChip').attr({
      'data-toggle': 'modal',
      'data-target': '#preencherCampos'
    })
  }
})