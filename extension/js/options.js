
( function( options ){

  "use strict";

  document.addEventListener( "DOMContentLoaded", options.restore );

  document.getElementById( "save" ).addEventListener( "click", options.save );

} )( {

  "save" : function(){

    var
      token     = document.getElementById( "token" ).value

      ,chatIDs  = document.getElementById( "chat_id" ).value

      ,rCleanChar  = document.getElementById( "r_clean_char" ).value

      ,filterChar  = document.getElementById( "filter_char" ).value

      ,btSave   = document.getElementById( "save" )
    ;

    if( !token || token.trim().length < 1  )token = "";
    if( !chatIDs || chatIDs.trim().length < 1  )chatIDs = "";

    token = token.trim();
    chatIDs = chatIDs.trim();

    chrome.storage.local.set( {

      "token"     : token

      ,"chatIDs"  : chatIDs

      ,"rCleanChar" : rCleanChar

      ,"filterChar" : filterChar

    }, function(){} );

  }

  ,"restore" : function(){

    chrome.storage.local.get( {

      "token"     : ""

      ,"chatIDs"  : ""

      ,"rCleanChar" : ""

      ,"filterChar" : ""

    }, function( options ){

      document.getElementById( "token" ).value = options.token;

      document.getElementById( "chat_id" ).value = options.chatIDs;

      document.getElementById( "r_clean_char" ).value = options.rCleanChar;

      document.getElementById( "filter_char" ).value = options.filterChar;

    } );

  }

} );
