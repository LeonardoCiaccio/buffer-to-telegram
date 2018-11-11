
( function(){

  "use strict";

  var
    sended = false

    ,resetSended = 5000

    ,telegram = {

      "endPoint" : "https://api.telegram.org/"

      ,sendMessage : function( token, chatIDs, text ){

        var xhr = new XMLHttpRequest();

        xhr.open( "POST", telegram.endPoint + token + "/sendMessage", true );

        xhr.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );

        xhr.onload = function () {

          try{

            var telegramResponse = JSON.parse( this.responseText );

            if( !telegramResponse.ok ){

              alert( chrome.i18n.getMessage( "telegram_not_ok" ) );

              console.log( this );

            }

          }catch( e ){

            console.log( e.message );

          }

        };

        xhr.send( "chat_id=" + encodeURIComponent( chatIDs ) + "&text=" + encodeURIComponent( text ) );

      }

      ,sendPhoto : function( token, chatIDs, photo, caption ){

        var xhr = new XMLHttpRequest();

        xhr.open( "POST", telegram.endPoint + token + "/sendPhoto", true );

        xhr.setRequestHeader( "Content-type", "application/x-www-form-urlencoded" );

        xhr.onload = function () {

          try{

            var telegramResponse = JSON.parse( this.responseText );

            if( !telegramResponse.ok ){

              alert( chrome.i18n.getMessage( "telegram_not_ok" ) );

              console.log( this );

            }

          }catch( e ){

            console.log( e.message );

          }

        };

        xhr.send( "chat_id=" + encodeURIComponent( chatIDs ) + "&photo=" + encodeURIComponent( photo ) + "&caption=" + encodeURIComponent( caption ) );

      }

    }
  ;

// --> When installed reset params and open settings

  chrome.runtime.onInstalled.addListener( function( details ){

  // --> Open opetions page

    chrome.runtime.openOptionsPage();

  } );

// --> Every time request to create new post we itercept and clone for Telegram

  chrome.webRequest.onBeforeRequest.addListener( function( details ){

    var
      photo = ( details.requestBody.formData[ "media[picture]" ] && details.requestBody.formData[ "media[picture]" ].length > 0 ) ? details.requestBody.formData[ "media[picture]" ][ 0 ] : ""

      ,text = ( details.requestBody.formData.text && details.requestBody.formData.text.length > 0  ) ? details.requestBody.formData.text[ 0 ] : ""

      ,currentSession = photo + text
    ;

// --> Only first item

    if( sended === true )return false;

    sended = true;

    chrome.storage.local.get( {

      "token"     : ""

      ,"chatIDs"  : ""

    }, function( options ){

      if( !options.token || !options.chatIDs || options.token.length < 1 || options.chatIDs.length < 1 )return false;

      if( photo.length > 0 ){

        telegram.sendPhoto( options.token, options.chatIDs, photo, text );

      }else if( text.length > 0 ){

        telegram.sendMessage( options.token, options.chatIDs, text );

      }

    } );

// --> Reset flag, it's important because have no token or ref for every post, send only one time and first item

    setTimeout( function(){

      sended = false;

    }, resetSended );

  },{
      "urls"    : [

          "https://buffer.com/api/1/updates/create.json"
      ]

      ,"types"  : [

        "xmlhttprequest"

      ] }

      ,[ "requestBody" ] );

} )();
