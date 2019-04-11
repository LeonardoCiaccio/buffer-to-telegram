
( function(){

  "use strict";

  document.querySelectorAll( "label[for='token']" ).forEach( function( label ){

    label.textContent = chrome.i18n.getMessage( "label_token" );

  } );

  document.getElementById( "token" ).setAttribute( "placeholder", chrome.i18n.getMessage( "placeholder_token" ) );

  document.querySelectorAll( "label[for='chat_id']" ).forEach( function( label ){

    label.textContent = chrome.i18n.getMessage( "label_chat_id" );

  } );

  document.querySelectorAll( "label[for='r_clean_char']" ).forEach( function( label ){

    label.textContent = chrome.i18n.getMessage( "label_r_clean_char" );

  } );

  document.querySelectorAll( "label[for='filter_char']" ).forEach( function( label ){

    label.textContent = chrome.i18n.getMessage( "label_filter_char" );

  } );

  document.getElementById( "chat_id" ).setAttribute( "placeholder", chrome.i18n.getMessage( "placeholder_chat_id" ) );

  document.getElementById( "save" ).textContent = chrome.i18n.getMessage( "button_save" );

} )();
