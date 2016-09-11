var xtag = require('x-tag');

xtag.register('attribute-other',{
	content: '<other-value></other-value>',
	methods: {
		render: function(data) {
			this.setAttribute('label',data.label||'label');
			this.firstElementChild.setAttribute('data',data.content||'0');
		}
	}
});

xtag.register('other-value',{});

module.exports = function(data) {
	var attribute = document.createElement('attribute-other');
	attribute.render(data);
	return attribute;
};