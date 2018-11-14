'use strict'

const serverMqtt = require('../src/mqtt');


  // Accepts the connection if the username and password are valid
  var authenticate = function(client, username, password, callback) {
        client.user = username;
      /*  usuarioService.user_find_one(username, password, function(result){
            callback(null, result);
        });*/
       // var _authorized = (username === 'techplus' && password.toString() === 'imachine');           
        
  }
  
  // In this case the client authorized as alice can publish to /users/alice taking
  // the username from the topic and verifing it is the same of the authorized user
  var authorizePublish = function(client, topic, payload, callback) {
   /* usuarioService.user_find_one_username(client.user, function(result){
        callback(null, result);
    });*/
  }
  
  // In this case the client authorized as alice can subscribe to /users/alice taking
  // the username from the topic and verifing it is the same of the authorized user
  var authorizeSubscribe = function(client, topic, callback) {
   /* usuarioService.user_find_one_username(client.user, function(result){
        callback(null, result);
    });  */ 
    
  }
  
function setup() {
    serverMqtt.authenticate       = authenticate;
    serverMqtt.authorizePublish   = authorizePublish;
    serverMqtt.authorizeSubscribe = authorizeSubscribe;

    console.log('Servidor MQTT rodando em localhost:1883');
}


// Cliente conectado ao servidor
serverMqtt.on('clientConnected', function (client) {
    console.log('Client connected:');
});

serverMqtt.on('clientDisconnected', function (client) {
    console.log('client disconnected');
});

// Cliente publicou no em algum topico
serverMqtt.on('published', function (packet, client) {
    console.log('Topic:', packet.topic.toString());   
    console.log('Message ID:', packet.messageId.toString());   
    console.log('Payload:', packet.payload.toString());
    console.log("=======================");
});

serverMqtt.on('subscribed', function (topic, client) {
    console.log('subscribed: ' + client.id);
});

serverMqtt.on('unsubscribed', function (topic, client) {
    console.log('unsubscribed: ' + client.id);
});


serverMqtt.on('ready', setup);
