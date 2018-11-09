
( function( options ){

  "use strict";

  document.addEventListener( "DOMContentLoaded", options.restore );

  document.getElementById( "save" ).addEventListener( "click", options.save );

} )( {

  "save" : function(){

    var
      token     = document.getElementById( "token" ).value

      ,chatIDs  = document.getElementById( "chat_id" ).value

      ,btSave   = document.getElementById( "save" )
    ;

    if( !token || token.trim().length < 1  )token = "";
    if( !chatIDs || chatIDs.trim().length < 1  )chatIDs = "";

    token = token.trim();
    chatIDs = chatIDs.trim();

    btSave.textContent = chrome.i18n.getMessage( "button_save_saving" );

    chrome.storage.local.set( {

      "token"     : token

      ,"chatIDs"  : chatIDs

    }, function(){

      setTimeout( function(){

        btSave.textContent = chrome.i18n.getMessage( "button_save_saved" );

        setTimeout( function(){

          btSave.textContent = chrome.i18n.getMessage( "button_save" );

        }, 750 );

      }, 750 );

    } );

  }

  ,"restore" : function(){

    chrome.storage.local.get( {

      "token"     : ""

      ,"chatIDs"  : ""

    }, function( options ){

      document.getElementById( "token" ).value = options.token;

      document.getElementById( "chat_id" ).value = options.chatIDs;

    } );

  }

} );
