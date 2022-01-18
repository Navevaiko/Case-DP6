(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');

// Adicionando evento de visualização da página ao inicia-lá
ga('send', 'pageview', location.pathname);

function sendEvent(eventCategory, eventAction, eventLabel) {
  ga('send', {
    hitType: 'event',
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel
  });
}

// Enviando evento ao clicar no menu de contato
jQuery('.menu-lista-contato').click(() => {
  sendEvent(eventCategory='menu', eventAction='entre_em_contato', eventLabel='link_externo');
});

// Enviando evento ao clicar no menu de download
jQuery('.menu-lista-download').click(() => {
  sendEvent(eventCategory='menu', eventAction='download_pdf', eventLabel='download_pdf');
});

// Enviando evento quando o usuário clica nos cards da página analise
jQuery('.card').click((event) => {
  var name = jQuery(event.currentTarget).data('name');

  sendEvent(eventCategory='analise', eventAction='ver_mais', eventLabel=name);
});

// Enviando evento quando o usuário preenche um campo ou envia o formulário
jQuery('.contato :input').each((_, element) => {
  if(element.type !== 'submit') {
    jQuery(element).blur(() => {
      if(element.value !== '') {
        sendEvent(eventCategory='contato', eventAction=element.id, eventLabel='preencheu');
      }
    });
  } else {
    jQuery(element).click(() => {
      sendEvent(eventCategory='contato', eventAction='enviado', eventLabel='enviado');
    });
  }
})