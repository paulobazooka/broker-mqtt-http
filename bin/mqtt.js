'use strict'

const serverMqtt = require('../src/mosca');
const gatewayService = require('../services/gateway-service');

  // Accepts the connection if the username and password are valid
  var authenticate = function(client, username, password, callback){ 
        
        if(username != null && password != null){
            client.user = username;
            let pass = password.toString();

            callback(null, ()=>{
                gatewayService.getGatewayAuth(username, pass);
            });
        }else{
            callback(null, false);
        }
  }
  // In this case the client authorized as alice can publish to /users/alice taking
  // the username from the topic and verifing it is the same of the authorized user
  var authorizePublish = function(client, topic, payload, callback) {

        if(client.user != null){
            callback(null, ()=>{
                gatewayService.getGatewayName(client.user);
            });
        }else {
            callback(null, false);
        }
  }
  // In this case the client authorized as alice can subscribe to /users/alice taking
  // the username from the topic and verifing it is the same of the authorized user
  var authorizeSubscribe = function(client, topic, callback) {
      if(client.user != null){
            callback(null, ()=>{
                gatewayService.getGatewayName(client.user);
            });
      }else{
          callback(null, false);
      }
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
