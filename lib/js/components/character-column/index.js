var xtag = require('x-tag'),
	attribute = require('attribute-contain'),
	attributeOther = require('attribute-other');

xtag.register('main-column',{
	methods: {
		render: function(data) {
			this.appendChild(attributeOther({label:'Proficiency Bonus',content:'+4'}));
			this.appendChild(attributeOther({label:'Inspiration',content:'X'}));
			this.appendChild(attribute({label:'Strength',value:'12'}));
			this.appendChild(attribute({label:'Dexterity',value:'14'}));
			this.appendChild(attribute({label:'Constitition',value:'15'}));
			this.appendChild(attribute({label:'Intelligence',value:'13'}));
			this.appendChild(attribute({label:'Wisdom',value:'15'}));
			this.appendChild(attribute({label:'Charisma',value:'14'}));
			this.appendChild(attributeOther({label:'Passive Wisdom (Preception)',content:'14'}));
		}
	}
});

xtag.register('spell-column',{});

module.exports = function(type,data){
	alert('COLUNMS!!!!');
};