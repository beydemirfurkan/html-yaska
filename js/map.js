var MarkerWithLabel=function(){"use strict";function e(e,t){for(let s in t.prototype)e.prototype[s]=t.prototype[s]}function t(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0,e.preventDefault?e.preventDefault():e.returnValue=!1}function s(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}class i{constructor(){e(i,google.maps.OverlayView)}}const a="block",l="none",n="absolute",o="marker-label",h="marker-label-event";class r extends i{constructor({clickable:e=!0,cursor:t="pointer",draggable:s=!0,labelAnchor:i=new google.maps.Point(0,0),labelClass:a=o,labelContent:l,position:n,opacity:h=1,map:r,labelZIndexOffset:g=1,visible:c=!0,zIndex:v=0}){super(),this.createElements(),this.anchor=i,this.content=l,this.className=a,this.clickable=e,this.cursor=t,this.draggable=s,n instanceof google.maps.LatLng?this.position=n:this.position=new google.maps.LatLng(n),this.opacity=h,this.visible=c,this.zIndex=v,this.zIndexOffset=g,r&&this.setMap(r)}set content(e){"string"==typeof e?(this.labelDiv.innerHTML=e,this.eventDiv.innerHTML=e):(this.labelDiv.innerHTML="",this.labelDiv.appendChild(e),this.eventDiv.innerHTML="",this.eventDiv.appendChild(e.cloneNode(!0)))}get className(){return this.labelDiv.className}set className(e){this.labelDiv.className=e,this.labelDiv.classList.add(o),this.eventDiv.className=e,this.eventDiv.classList.add(h)}set cursor(e){this.hoverCursor=e,this.isInteractive&&(this.eventDiv.style.cursor=e)}get cursor(){return this.isInteractive?this.hoverCursor:"inherit"}get isInteractive(){return this.draggable||this.clickable}set opacity(e){this.labelDiv.style.opacity=String(e)}set title(e){this.eventDiv.title=e}set visible(e){e?(this.labelDiv.style.display=a,this.eventDiv.style.display=a):(this.labelDiv.style.display=l,this.eventDiv.style.display=l)}onAdd(){this.getPanes().markerLayer.appendChild(this.labelDiv),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv)}draw(){const e=this.getProjection().fromLatLngToDivPixel(this.position),t=Math.round(e.x+this.anchor.x),s=Math.round(e.y+this.anchor.y);this.labelDiv.style.left=t+"px",this.labelDiv.style.top=s+"px",this.eventDiv.style.left=this.labelDiv.style.left,this.eventDiv.style.top=this.labelDiv.style.top;const i=(this.zIndex||Math.ceil(e.y))+this.zIndexOffset;this.labelDiv.style.zIndex=String(i),this.eventDiv.style.zIndex=String(i),this.eventDiv.style.display=this.isInteractive?this.eventDiv.style.display:l,this.eventDiv.style.cursor=this.cursor}addDomListener(e,t){return google.maps.event.addDomListener(this.eventDiv,e,t)}onRemove(){this.labelDiv.parentNode.removeChild(this.labelDiv),this.eventDiv.parentNode.removeChild(this.eventDiv)}createElements(){this.labelDiv=document.createElement("div"),this.eventDiv=document.createElement("div"),this.labelDiv.classList.add(o),this.labelDiv.classList.add(h),this.labelDiv.style.position=n,this.eventDiv.style.position=n,this.eventDiv.style.opacity="0.01"}}class g{constructor(t){e(g,google.maps.Marker),google.maps.Marker.call(this,t)}}const c="click",v="dblclick",d="drag",b="dragend",p="dragstart",m="mousedown",u="mouseover",L="mouseout",D="mouseup";return class extends g{constructor(e){super(function(e,t){const s=Object.assign({},e);return t.forEach(e=>delete s[e]),s}(e,["labelAnchor","labelZIndexOffset","labelClass","labelContent"])),this.isTouchScreen=!1,this.isDraggingLabel=!1,this.isMouseDownOnLabel=!1,this.shouldIgnoreClick=!1,this.label=new r(Object.assign({},e)),this.propertyListeners=[google.maps.event.addListener(this,"clickable_changed",this.handleClickableOrDraggableChange),google.maps.event.addListener(this,"cursor_changed",()=>{this.label.cursor=this.getCursor()}),google.maps.event.addListener(this,"draggable_changed",this.handleClickableOrDraggableChange),google.maps.event.addListener(this,"position_changed",()=>{this.label.position=this.getPosition()}),google.maps.event.addListener(this,"opacity_changed",()=>{this.label.opacity=this.getOpacity()}),google.maps.event.addListener(this,"title_changed",()=>{this.label.title=this.getTitle()}),google.maps.event.addListener(this,"visible_changed",()=>{this.label.visible=this.getVisible()}),google.maps.event.addListener(this,"zindex_changed",()=>{this.label.zIndex=this.getZIndex(),this.label.draw()})]}get isInteractive(){return this.getClickable()||this.getDraggable()}get labelClass(){return this.label.className}set labelClass(e){this.label.className=e}setMap(e){super.setMap(e),setTimeout(()=>{this.label.setMap(e),this.removeInteractiveListeners(),e&&this.addInteractiveListeners()})}handleClickableOrDraggableChange(){this.label.clickable=this.getClickable(),this.label.draggable=this.getDraggable(),this.isInteractive?this.addInteractiveListeners():this.removeInteractiveListeners()}removeInteractiveListeners(){this.interactiveListeners&&(this.interactiveListeners.forEach(e=>google.maps.event.removeListener(e)),this.interactiveListeners=null)}addInteractiveListeners(){if(!this.interactiveListeners){if(!this.getMap())return;this.interactiveListeners=[this.label.addDomListener(u,e=>{this.isTouchScreen||(google.maps.event.trigger(this,u,{latLng:this.getPosition()}),t(e))}),this.label.addDomListener(L,e=>{this.isTouchScreen||(this.mouseOutTimeout&&clearTimeout(this.mouseOutTimeout),this.isMouseDownOnLabel?this.mouseOutTimeout=setTimeout(()=>{this.isMouseDownOnLabel&&(this.isMouseDownOnLabel=!1,google.maps.event.trigger(this,D,{latLng:this.getPosition()}),this.isDraggingLabel&&(this.isDraggingLabel=!1,this.shouldIgnoreClick=!0,google.maps.event.trigger(this,b,{latLng:this.getPosition()}))),google.maps.event.trigger(this,L,{latLng:this.getPosition()})},200):google.maps.event.trigger(this,L,{latLng:this.getPosition()}),t(e))}),this.label.addDomListener(m,e=>{this.isDraggingLabel=!1,this.isMouseDownOnLabel=!0,google.maps.event.trigger(this,m,{latLng:this.getPosition()}),this.isTouchScreen||t(e)}),this.label.addDomListener(D,e=>{const s={latLng:this.getPosition()};this.isMouseDownOnLabel&&(this.isMouseDownOnLabel=!1,google.maps.event.trigger(this,D,s),this.isDraggingLabel&&(this.isDraggingLabel=!1,this.shouldIgnoreClick=!0,google.maps.event.trigger(this,b,s)),this.getDraggable()||t(e))}),this.label.addDomListener(c,e=>{this.shouldIgnoreClick?this.shouldIgnoreClick=!1:google.maps.event.trigger(this,c,{latLng:this.getPosition()}),t(e)}),this.label.addDomListener(v,e=>{google.maps.event.trigger(this,v,{latLng:this.getPosition()}),t(e)}),google.maps.event.addListener(this.getMap(),"mousemove",e=>{if(this.isMouseDownOnLabel&&this.getDraggable())if(this.isDraggingLabel){const t=new google.maps.LatLng(e.latLng.lat()-this.eventOffset.y,e.latLng.lng()-this.eventOffset.x);google.maps.event.trigger(this,d,Object.assign(Object.assign({},e),{latLng:t}))}else this.isDraggingLabel=!0,this.eventOffset=new google.maps.Point(e.latLng.lng()-this.getPosition().lng(),e.latLng.lat()-this.getPosition().lat()),google.maps.event.trigger(this,p,Object.assign(Object.assign({},e),{latLng:this.getPosition()}))}),google.maps.event.addListener(this,p,()=>{this.label.zIndex=1e6}),google.maps.event.addListener(this,d,({latLng:e})=>{this.setPosition(e)}),google.maps.event.addListener(this,b,()=>{this.label.zIndex=this.getZIndex(),this.label.draw()}),this.label.addDomListener("touchstart",e=>{this.isTouchScreen=!0,s(e)}),this.label.addDomListener("touchmove",e=>{s(e)}),this.label.addDomListener("touchend",e=>{s(e)})]}}}}();

//map style
let homeMapStyle =[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#cedeed"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
]

//map location
const MAPLOC= {
  berlin      : [ 52.481442522399966, 13.347538304097506, 12],
  hamburg     : [ 53.55073996475098,  9.984120640116885,  10],
  heringsdorf : [ 53.95746548822556,  14.151362528225947, 9],
  word        : [ 51.059917049519235, 10.336393901752523, 3],
}

///////////////////////////////////////////////////////////////////
// ## HOME MAP
///////////////////////////////////////////////////////////////////

//homepage markers
// [ [coordinate], "marker-icon-url", "label-bg-color", "logo-url", a-href-link, "big-img-url", "info-bg-color", "info-text", "project name"]   
const homeMapOption = {
  hmapOptions : [ [52.518879970413295, 13.406186399612555], 7, homeMapStyle],
  hMarkerOptions:[ //coor, icon-img-url, label-bg-color, labelname, a-href-link, big-img-url, info-bg-color, text
    [ [52.51119270243898,  13.299748497835985],  'img/map/location-red.svg',   "crimson",    "Projekt Fritschestraße",      "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [53.563384321205355, 10.003346714928746], 'img/map/location.svg',       "crimson",    "Projekt Hamburg",             "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.48103622153288,  13.443388978188427],  'img/map/location-red.svg',   "crimson",    "Projekt Innstraße",           "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [53.98050309824151,  14.128018241987812],  'img/map/location.svg',       "crimson",    "Projekt Heringsdorf",         "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.40851724709799,  13.402812327424886],  'img/map/location-red.svg',   "crimson",    "Projekt Landsberger Allee",   "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.55884805370686,  13.38616268249547],   'img/map/location-red.svg',   "crimson",    "Projekt Soldiner",            "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.51439675512714,  13.496137755507364],  'img/map/location-red.svg',   "crimson",    "Projekt Fanningerstraße",     "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.513495459144636, 13.479549284342944], 'img/map/location-red.svg',   "crimson",    "Projekt Frankfurter Allee",   "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.4813831022504,   13.4521760403373],     'img/map/location-red.svg',   "crimson",    "Projekt Treptower Straße",    "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.51797450993047,  13.291485098030037],  'img/map/location-red.svg',   "crimson",    "Projekt Klausenerplatz",      "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.47604044696946,  13.439514071047139],  'img/map/location-red.svg',   "crimson",    "Projekt Karl-Marx-Str.",      "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.408477977779484, 13.402823055698507], 'img/map/location-red.svg',   "crimson",    "Projekt Lintruper Straße",    "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
    [ [52.48166466694227,  13.347870926865008],  'img/map/location-red.svg',   "crimson",    "Projekt Hauptstraße",         "Rotklinkervilla in direkter Wasserlage",    "img/map/marker-big.jpg", ],
  ]
};

//homepage map fonksiyon
function initMap() {

  let homemarkers =[];
  let homemarkersInfo = [];
  //let mapWidth = document.querySelector(".map-box").getBoundingClientRect().width;

  let elClick= document.querySelectorAll(".mapclick a");

  //map option
  let divElement = document.getElementById("map");
  let mapOptions = {
    center: new google.maps.LatLng( homeMapOption["hmapOptions"][0][0], homeMapOption["hmapOptions"][0][1]),
    zoom: homeMapOption["hmapOptions"][1],
    styles: homeMapOption["hmapOptions"][2],
    scrollwheel: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    zoomControl: false,
    disableDefaultUI: true,

  };
  //create map
  let map = new google.maps.Map(divElement, mapOptions);

  //marker
  for (let i = 0; i < homeMapOption["hMarkerOptions"].length; i++) {
          
      const marker = homeMapOption["hMarkerOptions"];
      //create marker
      homemarkers[i] = new MarkerWithLabel({
          position: new google.maps.LatLng(marker[i][0][0], marker[i][0][1]),
          icon: {
          url: marker[i][1],
          size: new google.maps.Size(45, 40),
          scaledSize: new google.maps.Size(45, 40)
          },
          map: map,
          draggable: false,
          raiseOnDrag: false,
          labelContent: `<div class="map-box" style="background-color: ${marker[i][2]};">
                          <p clas="label-text">${marker[i][3]}</p>
                          
                        </div>`,
          labelAnchor: new google.maps.Point(-71, 5),
          labelClass: "map-labelbox",
      });  
      //create marker İnfo
      homemarkersInfo[i] = new google.maps.InfoWindow({ 
          content:`
                  <div class="marker-info">
                    <div class="info-image" style="background-image: url(img/map/marker-big.jpg);"></div>
                    <div class="info-text">

                        <h3>${marker[i][3]}</h3>
                        <p>${marker[i][4]}</p>
                        <div class="hr"></div>
                        
                        <div class="dflex map-features">
                          <div class="dflex">
                            <img src="img/map-text-icon-1.png" alt="yasko">
                            <span>5</span>
                          </div>

                          <div class="dflex">
                            <img src="img/map-text-icon-2.png" alt="yasko">
                            <span>5</span>
                          </div>

                          <div class="dflex">
                            <img src="img/map-text-icon-3.png" alt="yasko">
                            <span>542m<sup>2</sup></span>
                          </div>

                          <div class="dflex">
                            <img src="img/map-text-icon-4.png" alt="yasko">
                            <span>542m<sup>2</sup></span>
                          </div>
                        </div>

                        <div class="go-prj dflex">
                          <a href="#">Projeye Git</a>
                          <a href="#">Projeye Git</a>
                        </div>

                    </div>
                  </div>
                  `
      ,
      });
  }

  //open marker info
  for (let b = 0; b < homemarkers.length; b++) {
    google.maps.event.addListener(homemarkers[b], "click", function (e) {
      for (let c = 0; c < homemarkersInfo.length; c++) {
        homemarkersInfo[c].close()
      }
      homemarkersInfo[b].open(map, homemarkers[b]);
    });
    
  }

  const detailButton = document.querySelector(".detail-button");
  detailButton.addEventListener("click", function (e) {
    e.preventDefault();
    map.setCenter(new google.maps.LatLng(51.6988980588333, 10.425749302367276));
    map.setZoom(6);
  })

  //change map position
  for (let i = 0; i < elClick.length; i++) {

    elClick[i].addEventListener("click", function(){
      
      let di = elClick[i].dataset.loc
      let coord = MAPLOC[di];
      let lat = coord[0];
      let lng = coord[1];
      let zoom = coord[2];
  
      newLocation(lat, lng, zoom)
      }) 
  }
  
  function newLocation(newLat,newLng,zoom) {
    map.setZoom(zoom);
    map.setCenter({
      lat : newLat,
      lng : newLng
    });
  }

}

//////////////////////////////////
// ############################################# CONTACT MAP
//////////////////////////////////

const contactMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f0f0f0"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

const contactMapOption = {
  cmapOptions : [ [52.50146386093361, 13.306012830691126], 11, contactMapStyle],
  cAdress : [
    "Kurfürstendamm 72 10709 Berlin",
    "Hafencity 28 84759 Hamburg",
    "Prenzlauerberg Str. 34, 10700 Berlin",
    "Prenzlauerberg Str. 34, 10700 Berlin",
    "Prenzlauerberg Str. 34, 10700 Berlin",
    "Prenzlauerberg Str. 34, 10700 Berlin",
    "Prenzlauerberg Str. 34, 10700 Berlin",
    "Prenzlauerberg Str. 34, 10700 Berlin",
    "Prenzlauerberg Str. 34, 10700 Berlin",
    
  ],
  cMarkerOptions:[
    [ [ 52.50146386093361, 13.306012830691126], "Berlin", "Montag - Freitag", "info@yasko.de", "[08:30 -18:00]", "+49 – (0)30 263 977 68", "town0"],
    [ [53.52952158982806, 9.9820607035299],    "Hamburg", "Montag - Freitag", "info@yasko.de", "[08:30 -18:00]", "+49 – (0)30 263 977 68", "town1"],
    [ [41.209356068181606, 28.216368130323815],  "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town2"],
    [ [38.51649607958802, 26.545533874246843],   "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town3"],
    [ [38.434484935173224, 27.153703434996533],  "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town4"],
    [ [40.83685552265402, 29.45472065238971],    "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town5"],
    [ [40.01962152686637, 32.87632074750901],    "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town6"],
    [ [36.93361999563397, 28.294997033874214],   "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town7"],
    [ [37.10623742301839, 27.461093166897992],   "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town8"],
    [ [36.529323410855596, 28.222931267592315],  "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town9"],
    [ [41.198817669821594, 29.029612635594987],  "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town10"],
    [ [41.22473903262032, 29.22056236125749],    "Platzhalter Platzhalter", "Weekdays", "info@web.com", "[08:30 -18:00]", "0850 555 5 555", "town11"],
  ]
};

function contactMap() {

  let markerc = []; //contact markers
  let markerInfo = []; //contact markerInfo
  let elClick= document.querySelectorAll(".map-link a");
  
  //map option
  let divElement = document.getElementById("contact-map");
  let mapOptions = {
      center: new google.maps.LatLng( contactMapOption["cmapOptions"][0][0], contactMapOption["cmapOptions"][0][1]),
      zoom: contactMapOption["cmapOptions"][1],
      styles: contactMapOption["cmapOptions"][2],
      scrollwheel: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      zoomControl: false,
      disableDefaultUI: true,
  
  };
  //create map
  let map = new google.maps.Map(divElement, mapOptions);

  //create marker
  for (let a = 0; a < contactMapOption.cMarkerOptions.length; a++) {

    let marker = contactMapOption.cMarkerOptions;

    //create marker
    markerc[a] = new google.maps.Marker({
      position: new google.maps.LatLng(marker[a][0][0], marker[a][0][1]),
      icon: {
      url: "img/map/pd-marker.svg",
      size: new google.maps.Size(45, 40),
      scaledSize: new google.maps.Size(45, 40)
      },
      map: map,
      draggable: false,
      raiseOnDrag: false,
    });

    //create infowindow
    markerInfo[a] = new google.maps.InfoWindow({
      content: `<div class="cek">
      <div class="contact-info">
        <h2>${marker[a][1]}</h2>
        <div class="infotop">
          <p><b>Wochentage:</b> ${marker[a][2]}<br></p>
          <p><b>Adresse: </b> ${contactMapOption["cAdress"][a]}</p>
          <p><b>Mail: </b> <a href="mailto:${marker[a][3]}">${marker[a][3]}</a></p>
          <p><b>Arbeitszeiten:</b> ${marker[a][4]}</p>
        </div>

        <div class="bottom">
          <p class="phone">
            <i class="icon-phone-icon"></i> 
            <a href="tel:555 5 555" target="_blank">${marker[a][5]}</a>
          </p>
          <p>
            <i class="icon-pin-small"></i> 
            <a href="https://www.google.com/maps/place/${marker[a][0]}" target="_blank"> Standort</a>
          </p>            
        </div>
      </div>
    </div> `
    ,
    });


    if (a === 0) {
      markerInfo[0].open(map, markerc[0]);
    }
  }

  //marker add click open info
  for (let z = 0; z < markerc.length; z++) {
    google.maps.event.addListener(markerc[z], "click", function (e) {
      markerInfo[z].open(map, this);
    });
  }


  //click on change location
  for (let i = 0; i < elClick.length; i++) {
  
    elClick[i].addEventListener("click", function(e){

      e.preventDefault();
        
      let elClickActive = document.querySelector(".map-link a.active");
      elClickActive.classList.remove("active")
      elClick[i].classList.add("active");

      markerInfo.forEach(f => {
        f.close()
      });

      markerInfo[i].open(map, markerc[i]);

      }) 
  } 
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// ############################################################################################################ PD MAP
/////////////////////////////////////////////////////////////////////////////////////////////////////////


let pdMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f0f0f0"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

const pdMapOptions  = {
  mapOptions : [ [41.05768789084683, 29.008985157907475], 11, pdMapStyle,],
  markerOptions : [
     [ [41.05768789084683,  29.008942242562245], "img/map/logo.png", "nef reserve",],
     [ [40.99174657752172,  28.844584346964655], "transportation", "transport",],
     [ [41.10204837901695,  28.99907958978502],  "transportation", "transport",],
     [ [41.08548901928797,  29.09383667204817],  "transportation", "transport",],
     [ [41.06185565690443,  28.997674799504832], "transportation", "transport",],
     [ [41.06005523885282,  29.013055869088323], "Education", "edu",],
     [ [41.05890949260897,  29.011195255821836], "Education", "edu",],
     [ [41.062461289828995, 29.009472284390935], "Education", "edu",],
     [ [41.062590721334615, 29.001983556648664], "Shopping", "shopp",],
     [ [41.06331860317348,  29.0043009848312],   "Hospital", "hospital",],
  ],
};

function pdMap() {

  // variable
  let elClick = document.querySelectorAll(".pd-map-bar a")
  let pdmarkers =[];
  let pdmarkersInfo = [];


  //map option
  let divElement = document.getElementById("pd-map");
  let mapOptions = {
      center: new google.maps.LatLng( pdMapOptions["mapOptions"][0][0], pdMapOptions["mapOptions"][0][1]),
      zoom: pdMapOptions["mapOptions"][1],
      styles: pdMapOptions["mapOptions"][2],
      scrollwheel: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      zoomControl: false,
      disableDefaultUI: true,
  
  };
  //create map
  let map = new google.maps.Map(divElement, mapOptions);
   
  //create marker&info
  for (let a = 0; a < pdMapOptions["markerOptions"].length; a++) {

    let m = pdMapOptions["markerOptions"];
    let u, h;
    if (a == 0 ) { u = "img/map/pd-marker.svg" } else { u = "img/map/marker-plus.png" };
    if (a == 0 ) { h = `<img src="img/map/logo.png" alt="${m[a][2]}" style="height: 30px;">` } else { h = m[a][1] };
    
    //create marker
    pdmarkers[a] = new google.maps.Marker({
      position: new google.maps.LatLng(m[a][0][0], m[a][0][1]),
      icon: {
      url: u,
      size: new google.maps.Size(45, 40),
      scaledSize: new google.maps.Size(45, 40)
      },
      map: map,
      draggable: false,
      raiseOnDrag: false,
    });

    pdmarkers[a].category = m[a][2];
    if (a == 0 || m[a][2] == "transport") { pdmarkers[a].setVisible(true) } else { pdmarkers[a].setVisible(false) }

    //create infowindow
    pdmarkersInfo[a] = new google.maps.InfoWindow({
      content: `<div class="pd-info-wiew"><p>${h}</p></div>`,
    });
  }

  //marker add click open info
  for (let z = 0; z < pdmarkers.length; z++) {
    google.maps.event.addListener(pdmarkers[z], "click", function (e) {
      
      for (let w = 0; w < pdmarkersInfo.length; w++) {
        pdmarkersInfo[w].close()
      }
      pdmarkersInfo[z].open(map, pdmarkers[z]);
    });
  }

  //marker hide show
  for (let b = 0; b < elClick.length; b++) {
    
    elClick[b].addEventListener("click", e => {
      e.preventDefault();
      let category = elClick[b].dataset.category;
      let active = document.querySelector(".pd-map-bar a.active");
      active.classList.remove("active");
      elClick[b].classList.add("active");

      switch (category) {
        case "transport":
          map.setZoom(11)
          break;
        case "edu":
          map.setZoom(15)
          break;
        case "shopp":
          map.setZoom(13)
          break;
        case "hospital":
          map.setZoom(14)
          break;
      
      }
      
      for (let c = 0; c < pdmarkers.length; c++) {

        if (pdmarkers[c].category == category || pdmarkers[c].category == pdmarkers[0].category) {
          pdmarkers[c].setVisible(true)
        }else{
          pdmarkers[c].setVisible(false)
        }
      }
     
    })
  }  
}  



















///////////////////////////////////////////////////////////////////////
//single map
///////////////////////////////////////////////////////////////////////
const subMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#565020"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

function gutsof() {
  let mapOptions = {
      center: new google.maps.LatLng( 52.596873421052784, 13.386459853029516),
      zoom: 7,
      styles:subMapStyle,
      scrollwheel: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      zoomControl: false,
      disableDefaultUI: true,
  
  };

  const map = new google.maps.Map(document.getElementById("gutsof"), mapOptions);

  new google.maps.Marker({
    position: { lat: 52.596873421052784, lng: 13.386459853029516 },
    map,
    title: "Yasko",
  });
}

//////////////////////////////////
function sub2() {
  let mapOptions = {
      center: new google.maps.LatLng( 52.40847470533155, 13.403010810611907),
      zoom: 7,
      styles:subMapStyle,
      scrollwheel: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false,
      zoomControl: false,
      disableDefaultUI: true,
  };

  const map = new google.maps.Map(document.getElementById("sub2"), mapOptions);

  new google.maps.Marker({
    position: { lat: 52.40847470533155, lng: 13.403010810611907 },
    map,
    title: "Yasko",
  });
}

