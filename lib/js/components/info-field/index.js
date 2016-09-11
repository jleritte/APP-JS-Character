var xtag = require('x-tag');

xtag.register('info-field',{
	methods: {
		render: function(data) {
			this.setAttribute('label',data.label||'label');
			this.textContent = data.content||"\u00A0";
		}
	}
});

module.exports = function(data) {
	var field = document.createElement('info-field');
	field.render(data);
	return field;
};