function initialize() {
    var options = {
	    atmosphere: false, 
      	sky: false,
	    center: [0, 0], 
	    zoom: 3,
	    zooming:true
    };
    var earth = new WE.map('earth_div', options);
    var sufix='%3fkey=R8rAisQ0L6EL1wW8JVYQ';
    sufix='';
    WE.tileLayer('/marble/{z}/{x}/{y}.jpg'+sufix, {
      minZoom: 0,
      maxZoom: 5,
      attribution: 'NASA'
    }).addTo(earth);
    var showInfo = function(e) {
      //alert(e.latitude + ', ' + e.longitude);
      //alert('at ' + e.screenX + ', ' + e.screenY);
      //earth.setZoom(Math.round(earth.getZoom())+1);
    }
    earth.on('click', showInfo);
}
