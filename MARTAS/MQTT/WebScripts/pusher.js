#!/usr/bin/env nodejs
var sys = require('sys');
var net = require('net');
//var mqtt = require('mqtt');
var mqtt = require('/home/leon/Software/MARTAS/MQTT/WebScripts/MQTTClient.js');

var client = new mqtt.MQTTClient(1883, '127.0.0.1', 'pusher');
//var client  = mqtt.connect('127.0.0.1')
var io  = require('socket.io').listen(5000);


io.sockets.on('connection', function (socket) {
  socket.on('subscribe', function (data) {
    console.log('Subscribing to '+data.topic);
    client.subscribe(data.topic);
  });
});
 
client.addListener('mqttData', function(topic, payload){
  sys.puts(topic+'='+payload);
  io.sockets.emit('mqtt',{'topic':String(topic),
    'payload':String(payload)});
});
