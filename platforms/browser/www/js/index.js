/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function cargaMes(){
    var  hoy= new Date();
    var diaUno= new Date();
    diaUno.setDate(1);
     var vacios=6;
     if(diaUno.getDay()!=0){
         vacios=diaUno.getDay()-1;
     }
       var diasHtml=  $("#days");
       for(i =0;i<vacios;i++){
         var li = document.createElement("LI");
         diasHtml.append(li);
       }
       for(j =1;j<31;j++){
        var li = document.createElement("LI");
        li.innerHTML=j;
        diasHtml.append(li);
      }
      for(i =0;i<vacios;i++){
        var li = document.createElement("LI");
        diasHtml.append(li);
      }
//Año
$("#yearText").html("2"+hoy.getYear()-100);
//Mes
$("#monthText").html(getMesTexto(hoy.getMonth()));

}

function getMesTexto(mes){
    switch(mes){
        case 0:
        return "Enero";
        case 1:
        return "Febrero";
        case 2:
        return "Marzo";
        case 3:
        return "Abril";
        case 4:
        return "Mayo";
        case 5:
        return "Junio";
        case 6:
        return "Julio";
        case 7:
        return "Agosto";
        case 8:
        return "Septiembre";
        case 9:
        return "Octubre";
        case 10:
        return "Noviembre";
        case 11:
        return "Diciembre";
    }
}
