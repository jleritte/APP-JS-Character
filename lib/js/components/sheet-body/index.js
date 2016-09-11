var xtag = require('x-tag'),
	column = require('character-column');

xtag.register('sheet-body',{
	methods:{
		render: function(type,data) {

			console.log(type,data);
			var test = document.createElement('main-column');
			test.className = 'attribute';
			test.render();
			this.appendChild(test);
			this.appendChild(document.createElement('main-column-half'));
			this.appendChild(document.createElement('spell-column'));
		}
	}
});

module.exports = function(type,data){
	var body = document.createElement('sheet-body');
	body.render(type,data);
	return body;
};