var xtag = require('x-tag'),
	nameContain = require('name-contain'),
	infoContain = require('info-contain');

xtag.register('sheet-header',{
	methods:{
		render: function(type,data) {
			var name = nameContain(data.name||'Character Name'),
				info = infoContain(type,data.info);
			this.appendChild(name);
			this.appendChild(info);
		}
	}
});

module.exports = function(type,data) {
	var header = document.createElement('sheet-header');
	header.render(type, data);
	return header;
};