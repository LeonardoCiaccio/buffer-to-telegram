
( function(){

  "use strict";

  document.querySelectorAll( "label[for='token']" ).forEach( function( label ){

    label.textContent = chrome.i18n.getMessage( "label_token" );

  } );

  document.getElementById( "token" ).setAttribute( "placeholder", chrome.i18n.getMessage( "placeholder_token" ) );

  document.querySelectorAll( "label[for='chat_id']" ).forEach( function( label ){

    label.textContent = chrome.i18n.getMessage( "label_chat_id" );

  } );

  document.getElementById( "chat_id" ).setAttribute( "placeholder", chrome.i18n.getMessage( "placeholder_chat_id" ) );

  document.getElementById( "save" ).textContent = chrome.i18n.getMessage( "button_save" );

} )();
