var xtag = require('x-tag');

xtag.register('magic-info-field',{
	methods: {
		render: function(data) {
			this.setAttribute('label',data.label||'label');
			this.setAttribute('content',data.content||"\u00A0");
		}
	}
});

module.exports = function(data) {
	var field = document.createElement('magic-info-field');
	field.render(data);
	return field;
};