var xtag = require('x-tag'),
	attributeOther = require('attribute-other');

xtag.register('main-column',{
	methods: {
		render: function(data) {
			this.appendChild(attributeOther({label:'Proficiency Bonus',content:'+4'}));
		}
	}
});

xtag.register('spell-column',{});

module.exports = function(type,data){
	alert('COLUNMS!!!!');
};