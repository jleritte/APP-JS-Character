var xtag = require('x-tag'),
	sheetHeader = require('sheet-header'),
	sheetBody = require('sheet-body');

xtag.register('character-sheet',{
	methods: {
		render: function (type,data){
			var header = sheetHeader(type,data.head),
				body = sheetBody(type,data.body);
			this.appendChild(header);
			this.appendChild(body);
		}
	}
});

module.exports = function(page) {
	var sheet = document.createElement('character-sheet');
	sheet.render(page.type,page.data);
	return sheet;
};