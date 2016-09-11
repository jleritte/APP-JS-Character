var xtag = require('x-tag');

xtag.register('name-ribbon',{
	lifecycle: {
		created: function() {
			this.setAttribute('label','Character Name');
		}
	},
	methods: {
		render: function(name) {
			this.setAttribute('name',name);
		}
	}
});

module.exports = function(name) {
	var ribbon = document.createElement('name-ribbon');
	ribbon.render(name);
	return ribbon;
};