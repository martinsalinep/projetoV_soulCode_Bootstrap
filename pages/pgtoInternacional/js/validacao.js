$('#formDivCnpj, #formDivCpf').hide()

/* Aparecer input de CNPJ ou CPF */

$('#formTipoEntidade').blur(function () {
  if ($('#formTipoEntidade').val() == 'pessoaFisica') {
    $('#formDivCpf').show('slow');
    $('#formDivCnpj').hide();

  } else if ($('#formTipoEntidade').val() == 'pessoaJuridica') {
    $('#formDivCpf').hide();
    $('#formDivCnpj').show('slow');
  }
})

/* >>>>>>>> VALIDAÇÕES <<<<<<<<< */

/* Validações gerais */

/* Aceitar apenas valores numéricos */

$('#formDivCpf, #formCnpj, #formTelefoneRemessa, #formValorRemessa').keydown(function (elemento) {

  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105 ||
    elemento.keyCode == 8 || elemento.keyCode == 46) {
    return true
  } else {
    return false
  }
})

/* Não aceitar valores numéricos */

$('#formnomeRemessa').keydown(function (elemento) {
  if (elemento.keyCode >= 48 && elemento.keyCode <= 57 ||
    elemento.keyCode >= 96 && elemento.keyCode <= 105) {
    return false
  }
})

/* Validação nome quantidade de caracteres*/

let formNomeRemessa = $('#formNomeRemessa')
$('#formNomeRemessa').blur(function () {
  if ((formNomeRemessa.val()).length < 5) {
    formNomeRemessa.addClass('border-danger')
    return false;
  } else if ((formNomeRemessa.val()).length > 5) {
    formNomeRemessa.removeClass('border-danger')
    return true;
  }
})

/* Validação CNPJ */

function validarCNPJ() {
  let cnpj = document.getElementById('formCnpj').value
  let cnpjInput = document.getElementById('formCnpj')

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
  $('#formCpf').blur(function () {
    let cpfInput = $('#formCpf')
    let cpfValue = $('#formCpf').val()
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

$('#formEmailRemessa').blur(function () {
  let field = $('#formEmailRemessa').val();
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
    $('#formEmailRemessa').removeClass('border-danger')
  } else {
    $('#formEmailRemessa').addClass('border-danger')
  }
})

/* Validação de campos preenchidos Form Remessa Internacional */

let formRemessa = $('#formTipoRemessa')
let formEntidade = $('#formTipoEntidade')

$('#btnFormRemessa').click(function () {
  if (validarCNPJ() === true || validaCPF() === true &&
    formRemessa.val() != null && formTipoEntidade.val() != null
    && $('#formNomeRemessa').val() !== null && $('#formRg').val() !== null 
    && $('#formEmailRemessa').val() !== null && $('#formTelefoneRemessa').val() !== null
    && $('#formMoedaEntradaRemessa').val() !== null && $('#formMoedaSaidaRemessa').val() !== null
    && $('#formValorRemessa').val() !== null) {
    $('#btnFormRemessa').attr({
      'data-toggle': 'modal',
      'data-target': '#cotacaoConfirmada'
    })
  } else {
    $('#btnFormRemessa').attr({
      'data-toggle': 'modal',
      'data-target': '#preencherCampos'
    })
  }
})
