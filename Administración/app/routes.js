var Persona = require('./modelo/persona');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Personas
	app.get('/api/persona', Controller.getPersona);
	// Crear una nueva Persona
	app.post('/api/persona', Controller.setPersona);
	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);
	// application 
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};
