var xtag = require('x-tag'),
	infoBox = require('info-box');

xtag.register('info-contain',{
	methods: {
		render: function(type,data) {
			this.appendChild(infoBox((type||'main')+'-box',data));
		}
	}
});

module.exports = function(type,data) {
	var contain = document.createElement('info-contain');
	contain.render(type,data);
	return contain;
};