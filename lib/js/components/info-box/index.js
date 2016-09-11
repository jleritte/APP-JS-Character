var xtag = require('x-tag'),
	infoField = require('info-field'),
	magicInfo = require('magic-info-field');

xtag.register('main-box',{
	methods:{
		render: function(data) {
			var self = this;
			data.forEach(function(info){
				var field = infoField(info);
				self.appendChild(field);
			});
		}
	}
});

xtag.register('spell-box',{
	methods:{
		render: function(data) {
			var self = this;
			data.forEach(function(info){
				var field = magicInfo(info);
				self.appendChild(field);
			});
		}
	}
});

module.exports = function(type,data) {
	var box = document.createElement(type);
	box.render(data);
	return box;
};