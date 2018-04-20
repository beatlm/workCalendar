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
var month=0;
var year=0;
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


function loadMonth(isNext){

$("#days").empty();
var diaUno= new Date();
    //Borramos los dias cargados
if(isNext!=undefined){
    if(isNext===true){
        if(this.month==11){
            month=0;
            this.year++;
        } else{
            this.month++;
        }
    }else if(isNext===false){   
        if(this.month==0){
          this.month=11; 
          this.year--;
        }else{
          this.month--;
        }
    }
  
diaUno.setMonth(this.month);
diaUno.setYear(this.year);
}else{//Primera carga
    this.month=diaUno.getMonth();

}

 //   if(month!=undefined){
  //      diaUno.setMonth(month);
  //      if(month==11){
  //          diaUno.setFullYear(diaUno.getFullYear()-1);
           
  //          this.year=year-1;
  //      }
  //  }else{//Primera carga
        this.year=diaUno.getFullYear();
  //  }

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
$("#yearText").html(this.year);
//Mes
$("#monthText").html(getMesTexto(diaUno.getMonth()));

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
