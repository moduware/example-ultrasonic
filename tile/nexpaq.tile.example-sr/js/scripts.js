/**
 * Actions when html and all external files are loaded
 */
document.addEventListener('DOMContentLoaded', function(event) {

	// Creating header on top of tile
  Nexpaq.Header.create('Ultrasonic Sensor');
document.getElementById('cm').addEventListener('click', function(e) {
		cm();
	});
document.getElementById('inch').addEventListener('click', function(e) {
		inch();
	});
  
});

/**
 * Actions when nexpaq API completely initialized 
 * and we can start working with it
 */
 
document.addEventListener('NexpaqAPIReady', function() {

	Nexpaq.API.Module.addEventListener('DataReceived', function(event) {
		/**
		 * There are 3 arguments passed when app runs tile:
		 * - Target module UUID
		 * - Target module slot in gateway
		 * - Target module type (i.e. nexpaq.module.laser)
		 */
		//var targetModuleUuid = Nexpaq.Arguments[0];
		
		// we don't care about data not related to our module
		//if(event.moduleUuid != targetModuleUuid) return;

		// Module can send multiple types of data, so we are filtering it by type
		if(event.dataSource == 'UltraSonicValue') {
			// And routing it to correct function that will handle it for us
			handleAdcValue(event.variables.ultrasonic);
		}

	});  	
});
	var units = 58;
	var units_n = "cm";

function cm() {
	units = 58;
	units_n = "cm";
};
function inch() {
	units = 148;
	units_n = "inch";
};
/**
 * Handles adc value received from module and outputs it to UI
 * 
 * @param {int} adc Number representing ADC value
 */

function handleAdcValue(Ultrasonic) {

	var DistanceReading0 = Ultrasonic;

	var DistanceConv = (DistanceReading0/units);
	var DistanceValue = DistanceConv.toFixed(2); //print only 2 decimals

	if (116 <= DistanceReading0 && DistanceReading0 <= 23200){
		document.getElementById("Distance").textContent = DistanceValue + " " + units_n;
	}	else {
		document.getElementById("Distance").textContent = "OUT OF RANGE";
	}
}