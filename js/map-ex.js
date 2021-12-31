var MarkerWithLabel=function(){"use strict";function e(e,t){for(let s in t.prototype)e.prototype[s]=t.prototype[s]}function t(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0,e.preventDefault?e.preventDefault():e.returnValue=!1}function s(e){(e=e||window.event).stopPropagation?e.stopPropagation():e.cancelBubble=!0}class i{constructor(){e(i,google.maps.OverlayView)}}const a="block",l="none",n="absolute",o="marker-label",h="marker-label-event";class r extends i{constructor({clickable:e=!0,cursor:t="pointer",draggable:s=!0,labelAnchor:i=new google.maps.Point(0,0),labelClass:a=o,labelContent:l,position:n,opacity:h=1,map:r,labelZIndexOffset:g=1,visible:c=!0,zIndex:v=0}){super(),this.createElements(),this.anchor=i,this.content=l,this.className=a,this.clickable=e,this.cursor=t,this.draggable=s,n instanceof google.maps.LatLng?this.position=n:this.position=new google.maps.LatLng(n),this.opacity=h,this.visible=c,this.zIndex=v,this.zIndexOffset=g,r&&this.setMap(r)}set content(e){"string"==typeof e?(this.labelDiv.innerHTML=e,this.eventDiv.innerHTML=e):(this.labelDiv.innerHTML="",this.labelDiv.appendChild(e),this.eventDiv.innerHTML="",this.eventDiv.appendChild(e.cloneNode(!0)))}get className(){return this.labelDiv.className}set className(e){this.labelDiv.className=e,this.labelDiv.classList.add(o),this.eventDiv.className=e,this.eventDiv.classList.add(h)}set cursor(e){this.hoverCursor=e,this.isInteractive&&(this.eventDiv.style.cursor=e)}get cursor(){return this.isInteractive?this.hoverCursor:"inherit"}get isInteractive(){return this.draggable||this.clickable}set opacity(e){this.labelDiv.style.opacity=String(e)}set title(e){this.eventDiv.title=e}set visible(e){e?(this.labelDiv.style.display=a,this.eventDiv.style.display=a):(this.labelDiv.style.display=l,this.eventDiv.style.display=l)}onAdd(){this.getPanes().markerLayer.appendChild(this.labelDiv),this.getPanes().overlayMouseTarget.appendChild(this.eventDiv)}draw(){const e=this.getProjection().fromLatLngToDivPixel(this.position),t=Math.round(e.x+this.anchor.x),s=Math.round(e.y+this.anchor.y);this.labelDiv.style.left=t+"px",this.labelDiv.style.top=s+"px",this.eventDiv.style.left=this.labelDiv.style.left,this.eventDiv.style.top=this.labelDiv.style.top;const i=(this.zIndex||Math.ceil(e.y))+this.zIndexOffset;this.labelDiv.style.zIndex=String(i),this.eventDiv.style.zIndex=String(i),this.eventDiv.style.display=this.isInteractive?this.eventDiv.style.display:l,this.eventDiv.style.cursor=this.cursor}addDomListener(e,t){return google.maps.event.addDomListener(this.eventDiv,e,t)}onRemove(){this.labelDiv.parentNode.removeChild(this.labelDiv),this.eventDiv.parentNode.removeChild(this.eventDiv)}createElements(){this.labelDiv=document.createElement("div"),this.eventDiv=document.createElement("div"),this.labelDiv.classList.add(o),this.labelDiv.classList.add(h),this.labelDiv.style.position=n,this.eventDiv.style.position=n,this.eventDiv.style.opacity="0.01"}}class g{constructor(t){e(g,google.maps.Marker),google.maps.Marker.call(this,t)}}const c="click",v="dblclick",d="drag",b="dragend",p="dragstart",m="mousedown",u="mouseover",L="mouseout",D="mouseup";return class extends g{constructor(e){super(function(e,t){const s=Object.assign({},e);return t.forEach(e=>delete s[e]),s}(e,["labelAnchor","labelZIndexOffset","labelClass","labelContent"])),this.isTouchScreen=!1,this.isDraggingLabel=!1,this.isMouseDownOnLabel=!1,this.shouldIgnoreClick=!1,this.label=new r(Object.assign({},e)),this.propertyListeners=[google.maps.event.addListener(this,"clickable_changed",this.handleClickableOrDraggableChange),google.maps.event.addListener(this,"cursor_changed",()=>{this.label.cursor=this.getCursor()}),google.maps.event.addListener(this,"draggable_changed",this.handleClickableOrDraggableChange),google.maps.event.addListener(this,"position_changed",()=>{this.label.position=this.getPosition()}),google.maps.event.addListener(this,"opacity_changed",()=>{this.label.opacity=this.getOpacity()}),google.maps.event.addListener(this,"title_changed",()=>{this.label.title=this.getTitle()}),google.maps.event.addListener(this,"visible_changed",()=>{this.label.visible=this.getVisible()}),google.maps.event.addListener(this,"zindex_changed",()=>{this.label.zIndex=this.getZIndex(),this.label.draw()})]}get isInteractive(){return this.getClickable()||this.getDraggable()}get labelClass(){return this.label.className}set labelClass(e){this.label.className=e}setMap(e){super.setMap(e),setTimeout(()=>{this.label.setMap(e),this.removeInteractiveListeners(),e&&this.addInteractiveListeners()})}handleClickableOrDraggableChange(){this.label.clickable=this.getClickable(),this.label.draggable=this.getDraggable(),this.isInteractive?this.addInteractiveListeners():this.removeInteractiveListeners()}removeInteractiveListeners(){this.interactiveListeners&&(this.interactiveListeners.forEach(e=>google.maps.event.removeListener(e)),this.interactiveListeners=null)}addInteractiveListeners(){if(!this.interactiveListeners){if(!this.getMap())return;this.interactiveListeners=[this.label.addDomListener(u,e=>{this.isTouchScreen||(google.maps.event.trigger(this,u,{latLng:this.getPosition()}),t(e))}),this.label.addDomListener(L,e=>{this.isTouchScreen||(this.mouseOutTimeout&&clearTimeout(this.mouseOutTimeout),this.isMouseDownOnLabel?this.mouseOutTimeout=setTimeout(()=>{this.isMouseDownOnLabel&&(this.isMouseDownOnLabel=!1,google.maps.event.trigger(this,D,{latLng:this.getPosition()}),this.isDraggingLabel&&(this.isDraggingLabel=!1,this.shouldIgnoreClick=!0,google.maps.event.trigger(this,b,{latLng:this.getPosition()}))),google.maps.event.trigger(this,L,{latLng:this.getPosition()})},200):google.maps.event.trigger(this,L,{latLng:this.getPosition()}),t(e))}),this.label.addDomListener(m,e=>{this.isDraggingLabel=!1,this.isMouseDownOnLabel=!0,google.maps.event.trigger(this,m,{latLng:this.getPosition()}),this.isTouchScreen||t(e)}),this.label.addDomListener(D,e=>{const s={latLng:this.getPosition()};this.isMouseDownOnLabel&&(this.isMouseDownOnLabel=!1,google.maps.event.trigger(this,D,s),this.isDraggingLabel&&(this.isDraggingLabel=!1,this.shouldIgnoreClick=!0,google.maps.event.trigger(this,b,s)),this.getDraggable()||t(e))}),this.label.addDomListener(c,e=>{this.shouldIgnoreClick?this.shouldIgnoreClick=!1:google.maps.event.trigger(this,c,{latLng:this.getPosition()}),t(e)}),this.label.addDomListener(v,e=>{google.maps.event.trigger(this,v,{latLng:this.getPosition()}),t(e)}),google.maps.event.addListener(this.getMap(),"mousemove",e=>{if(this.isMouseDownOnLabel&&this.getDraggable())if(this.isDraggingLabel){const t=new google.maps.LatLng(e.latLng.lat()-this.eventOffset.y,e.latLng.lng()-this.eventOffset.x);google.maps.event.trigger(this,d,Object.assign(Object.assign({},e),{latLng:t}))}else this.isDraggingLabel=!0,this.eventOffset=new google.maps.Point(e.latLng.lng()-this.getPosition().lng(),e.latLng.lat()-this.getPosition().lat()),google.maps.event.trigger(this,p,Object.assign(Object.assign({},e),{latLng:this.getPosition()}))}),google.maps.event.addListener(this,p,()=>{this.label.zIndex=1e6}),google.maps.event.addListener(this,d,({latLng:e})=>{this.setPosition(e)}),google.maps.event.addListener(this,b,()=>{this.label.zIndex=this.getZIndex(),this.label.draw()}),this.label.addDomListener("touchstart",e=>{this.isTouchScreen=!0,s(e)}),this.label.addDomListener("touchmove",e=>{s(e)}),this.label.addDomListener("touchend",e=>{s(e)})]}}}}();

//map style
let xstylemap =[
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
  istanbul : [41.019808958218604, 28.995541504998716],
  london : [51.28074460753821, -0.3746623840169832],
  bodrum : [37.04023865918467, 27.37912772048391],
}

//////////////////////////////////
// ## HOME MAP
//////////////////////////////////

//homepage markers
// ["project-name", "lat", "lng", "marker-icon-url", "label-bg-color", "label-image-url", "info-img-url", "info-bg-color", "info-logo-url", "info-text"]   
const markers  = [
    [ "nef", 41.00391636495706, 28.97641640672103, 'img/map/location-red.svg', "crimson", "img/map/logo.png", "img/map/markerinfo.jpg", "crimson", "img/map/logo.png", "Deneme yazısı"],
    [ "nef", 41.10333268273525, 28.87113126990127, 'img/map/location.svg', "#202020", "img/map/logo.png", "img/map/markerinfo.jpg", "#202020", "img/map/logo.png", "Deneme yazısı"],
    [ "nef", 41.14989948870136, 29.19796733202545, 'img/map/location-red.svg', "crimson", "img/map/logo.png", "img/map/markerinfo.jpg", "crimson", "img/map/logo.png", "Deneme yazısı"],
    [ "nef", 41.04447400235435, 29.057331769044552, 'img/map/location.svg', "#202020", "img/map/logo.png", "img/map/markerinfo.jpg", "#202020", "img/map/logo.png", "Deneme yazısı"],
    [ "nef", 37.04845955094957, 27.462555144343934, 'img/map/location-red.svg', "crimson", "img/map/logo.png", "img/map/markerinfo.jpg", "crimson", "img/map/logo.png", "Deneme yazısı"],
    [ "nef", 51.28074460753821, -0.3746623840169832, 'img/map/location-red.svg', "crimson", "img/map/logo.png", "img/map/markerinfo.jpg", "crimson", "img/map/logo.png", "Deneme yazısı"],
];

//homepage map fonksiyon
function initMap() {

let fff= document.querySelectorAll(".mapclick a");
for (let i = 0; i < fff.length; i++) {

    fff[i].addEventListener("click", function(){

    let fffActive = document.querySelector(".mapclick a.active");
    fffActive.classList.remove("active")
    fff[i].classList.add("active");

    let di = fff[i].dataset.loc
    let coord = MAPLOC[di];
    let lat = coord[0];
    let lng = coord[1];

    newLocation(lat, lng)
    }) 
}

//map option
let divElement = document.getElementById("map");
let mapOptions = {
    center: { lat: 41.019808958218604, lng: 28.995541504998716 },
    zoom: 11,
    styles: xstylemap,
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

function newLocation(newLat,newLng) {
    map.setCenter({
    lat : newLat,
    lng : newLng
    });
}


//marker
for (let i = 0; i < markers.length; i++) {
        
    const newMarker = markers[i];
    //create marker
    let markerF = new MarkerWithLabel({
        position: { lat: newMarker[1], lng: newMarker[2] },
        icon: {
        url: newMarker[3],
        size: new google.maps.Size(45, 40),
        scaledSize: new google.maps.Size(45, 40)
        },
        map: map,
        draggable: false,
        raiseOnDrag: false,
        labelContent: `<div class="map-box" style="background-color: ${newMarker[4]};"><img class="marker-img" src="${newMarker[5]}" alt="${newMarker[0]}"></div>`,
        labelAnchor: new google.maps.Point(-65, 10),
        labelClass: "map-labelbox",
    });  
    //create marker İnfo
    let markerInfo = new google.maps.InfoWindow({
        content: `<div class="marker-info">
                    <a href="#">
                    <div class="info-image" style="background-image: url(${newMarker[6]});"></div>
                    <div class="info-text" style="background-color: ${newMarker[7]};">
                        <img src="${newMarker[8]}" alt="${newMarker[0]}-logo">
                        <p>${newMarker[9]}</p>
                    </div>
                    </a>
                </div> `
    ,
    });
    //open marker info
    google.maps.event.addListener(markerF, "click", function (e) {
      markerInfo.open(map, this);
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
  cmapOptions : [{ lat: 41.007287055695485, lng: 28.967999877792153 }, 12, contactMapStyle],
  cAdress : [
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
    "Esentepe Mh. Ali Kaya Sk. No:3, Apa Nef Plaza Levent, 34394 Şişli/İstanbul",
  ],
  cMarkerOptions:[
    [ [41.007287055695485, 28.967999877792153], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town0"],
    [ [41.09329530229156, 28.37253275746808], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town1"],
    [ [41.209356068181606, 28.216368130323815], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town2"],
    [ [38.51649607958802, 26.545533874246843], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town3"],
    [ [38.434484935173224, 27.153703434996533], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town4"],
    [ [40.83685552265402, 29.45472065238971], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town5"],
    [ [40.01962152686637, 32.87632074750901], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town6"],
    [ [36.93361999563397, 28.294997033874214], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town7"],
    [ [37.10623742301839, 27.461093166897992], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town8"],
    [ [36.529323410855596, 28.222931267592315], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town9"],
    [ [41.198817669821594, 29.029612635594987], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town10"],
    [ [41.22473903262032, 29.22056236125749], "heading", "hafta içi", "info@website.com.tr", "[08:30 -18:00", "0850 555 5 555", "town11"],
  ]
};

function contactMap() {

  let markerc = []; //contact markers
  let markerInfo = []; //contact markerInfo
  let elClick= document.querySelectorAll(".map-link a");
  
  //map option
  let divElement = document.getElementById("contact-map");
  let mapOptions = {
      center: new google.maps.LatLng( contactMapOption["cmapOptions"][0] ),
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
  
  //change location
  function newLocation(newLat,newLng) {
      map.setCenter({
      lat : newLat,
      lng : newLng
      });
  }

  for (let a = 0; a < contactMapOption.cMarkerOptions.length; a++) {

    let marker = contactMapOption.cMarkerOptions;

    //create marker
    markerc[a] = new google.maps.Marker({
      position: new google.maps.LatLng(marker[a][0]),
      icon: {
      url: "../img/map/location.svg",
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
          <p><b>Çalışma Günleri:</b> ${marker[a][2]}<br></p>
          <p><b>Adress: </b> ${contactMapOption["cAdress"][a]}</p>
          <p><b>Mail: </b> <a href="mailto:${marker[a][3]}">${marker[a][3]}</a></p>
          <p><b>Çalışma Saatleri:</b> ${marker[a][4]}</p>
        </div>

        <div class="bottom">
          <p class="phone">
            <span class="icon-phone-icon"></span> 
            <a href="tel:555 5 555">${marker[a][5]}</a>
          </p>
          <p>
            <a class="directions" href="https://www.google.com/maps/place/${marker[a][0]}" target="_blank">
            <span class="icon-pin-small"></span> Yol Tarifi Al
          </a>
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

      let di = elClick[i].dataset.loc;
      let arr=contactMapOption.cMarkerOptions[i], lat, lgn, pos;

      if(di== arr[6]){
        lat= arr[0][0];
        lgn= arr[0][1];
      }
     

      newLocation(lat, lng);

      markerInfo.forEach(f => {
        f.close()
      });

      markerInfo[i].open(map, markerc[i]);

      }) 
  } 
}



 