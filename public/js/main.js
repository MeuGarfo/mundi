function initialize() {
    console.log(document.location.host);
    var options = {
	    atmosphere: true, 
      	sky: true,
	    center: [0, 0], 
	    zoom: 5,
	    zooming:false
    };
    var earth = new WE.map('earth_div', options);
    var sufix='%3fkey=R8rAisQ0L6EL1wW8JVYQ';
    sufix='';
    WE.tileLayer('http://public.local/marble/{z}/{x}/{y}.jpg'+sufix, {
      minZoom: 0,
      maxZoom: 5,
      attribution: 'NASA'
    }).addTo(earth);
    console.log("done.");
}
