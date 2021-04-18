$('#divCnpj, #divCpf').hide()

/* Aparecer input de CNPJ ou CPF */

$('#carouselTipoEntidade').blur(function () {
  if ($('#carouselTipoEntidade').val() == 'pessoaFisica') {
    $('#divCpf').show('slow');
    $('#divCnpj').hide();

  } else if ($('#carouselTipoEntidade').val() == 'pessoaJuridica') {
    $('#divCpf').hide();
    $('#divCnpj').show('slow');
  }
})

/* >>>>>>>> VALIDAÇÕES <<<<<<<<< */

/* Validações gerais */

/* Aceitar apenas valores numéricos */

$('#cpf, #cnpj, #telefoneRemessa, #telefoneCambio, #valorRemessa, #valorCambio').keydown(function (elemento) {

  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105 ||
    elemento.keyCode == 8 || elemento.keyCode == 46) {
    return true
  } else {
    return false
  }
})

/* Não aceitar valores numéricos */

$('#nomeRemessa, #nomeCambio').keydown(function (elemento) {
  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105) {
    return false
  }
})

/* Validação nome quantidade de caracteres*/

let nomeRemessa = $('#nomeRemessa')
$('#nomeRemessa').blur(function () {
  if ((nomeRemessa.val()).length < 5) {
    nomeRemessa.addClass('border-danger')
    return false;
  } else if ((nomeRemessa.val()).length > 5) {
    nomeRemessa.removeClass('border-danger')
    return true;
  }
})

let nomeCambio = $('#nomeCambio')
$('#nomeCambio').blur(function () {
  if ((nomeCambio.val()).length < 5) {
    nomeCambio.addClass('border-danger')
    return false;
  } else if ((nomeCambio.val()).length > 5) {
    nomeCambio.removeClass('border-danger')
    return true;
  }
})


/* Validação CNPJ */

function validarCNPJ() {
  let cnpj = document.getElementById('cnpj').value
  let cnpjInput = document.getElementById('cnpj')

  if (cnpj == '') {
    cnpjInput.classList.add('border-danger')
    return false;
  }

  if (cnpj.length != 14) {
    cnpjInput.classList.add('border-danger')
    return false;
  }

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999") {

    cnpjInput.classList.add('border-danger')
    return false;
  }

  // Valida DVs
  tamanho = cnpj.length - 2
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0)) {
    cnpjInput.classList.add('border-danger')
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
      pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1)) {
    cnpjInput.classList.add('border-danger')
    return false;
  }

  cnpjInput.classList.remove('border-danger')
  return true;
}

/* Validador de CPF */

function validaCPF() {
  $('#cpf').blur(function () {
    let cpfInput = $('#cpf')
    let cpfValue = $('#cpf').val()
    let soma = 0;
    let resto;

    if (cpfValue == "00000000000" || cpfValue.length != 11) {
      cpfInput.addClass('border-danger')
    }

    for (i = 1; i <= 9; i++) {
      soma = soma + parseInt(cpfValue.substring(i - 1, i)) * (11 - i);
    }
    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }

    if (resto != parseInt(cpfValue.substring(9, 10))) {
      cpfInput.addClass('border-danger');
      return false;
    }

    soma = 0
    for (i = 1; i <= 10; i++) {
      soma = soma + parseInt(cpfValue.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;
    if (resto == 10 || resto == 11 || resto < 2) {
      resto = 0;
    } else {
      resto = 11 - resto;
    }
    if (resto != parseInt(cpfValue.substring(10, 11))) {
      cpfInput.addClass('border-danger');
      return false;
    }
    cpfInput.removeClass('border-danger')
    return true;
  })
}

/* Verificação do email */

$('#emailRemessa').blur(function () {
  let field = $('#emailRemessa').val();
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
    $('#emailRemessa').removeClass('border-danger')
  } else {
    $('#emailRemessa').addClass('border-danger')
  }
})

$('#emailCambio').blur(function () {
  let field = $('#emailCambio').val();
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
    $('#emailCambio').removeClass('border-danger')
  } else {
    $('#emailCambio').addClass('border-danger')
  }
})

/* Validação de campos preenchidos Carousel Remessa Internacional */

let carouselRemessa = $('#carouselTipoRemessa')
let carouselEntidade = $('#carouselTipoEntidade')

$('#btnCarouselRemessa').click(function () {
  if (validarCNPJ() === true || validaCPF() === true &&
    carouselRemessa.val() != null && carouselTipoEntidade.val() != null
    && $('#nomeRemessa').val() !== null && $('#rg').val() !== null 
    && $('#emailRemessa').val() !== null && $('#telefoneRemessa').val() !== null
    && $('#moedaEntradaRemessa').val() !== null && $('#moedaSaidaRemessa').val() !== null
    && $('#valorRemessa').val() !== null) {
    $('#btnCarouselRemessa').attr({
      'data-toggle': 'modal',
      'data-target': '#cotacaoConfirmada'
    })
  } else {
    $('#btnCarouselRemessa').attr({
      'data-toggle': 'modal',
      'data-target': '#preencherCampos'
    })
  }
})

/* Validação de campos preenchidos Carousel Câmbio */

$('#btnCarouselCambio').click(function () {
  if ($('#nomeCambio').val() !== null || $('#emailCambio').val() !== null
    || $('#telefoneCambio').val() !== null || $('#moedaEntradaCambio').val() !== null
    || $('#moedaSaidaCambio').val() !== null || $('#valorCambio').val() !== null) {
    $('#btnCarouselCambio').attr({
      'data-toggle': 'modal',
      'data-target': '#cotacaoConfirmada'
    })
  } else {
    $('#btnCarouselCambio').attr({
      'data-toggle': 'modal',
      'data-target': '#preencherCampos'
    })
  }
})