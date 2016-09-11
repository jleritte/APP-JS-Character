var xtag = require('x-tag'),
	nameRibbon = require('name-ribbon');

xtag.register('name-contain',{
	methods: {
		render: function(name) {
			var ribbon = nameRibbon(name);
			this.appendChild(ribbon);
		}
	}
});

module.exports = function(name) {
	var contain = document.createElement('name-contain');
	contain.render(name);
	return contain;
};