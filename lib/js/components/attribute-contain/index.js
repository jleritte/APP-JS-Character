var xtag = require('x-tag'),
	checks = require('skill-check');

xtag.register('attribute-contain',{
	content: ['<attr-bonus></attr-bonus>',
		'<attr-value></attr-value>',
		'<skills-list></skills-list>'
	].join(''),
	methods: {
		render: function(data) {
			this.firstElementChild.setAttribute('data',Math.floor((data.value-10)/2)||'-4');
			this.querySelector('attr-value').setAttribute('stat',data.value||'3');
			this.querySelector('attr-value').setAttribute('label',data.label||'label');
		}
	}
});

xtag.register('attr-bonus',{});
xtag.register('attr-value',{});
xtag.register('skills-list',{
	content: '<throw-check></throw-check><skill-check></skill-check><skill-check></skill-check><skill-check></skill-check><skill-check></skill-check><skill-check></skill-check>'
});

module.exports = function(data) {
	var attribute = document.createElement('attribute-contain');
	attribute.render(data);
	return attribute;
};


					// <div class="skills">
					// 	<div class="skillContain">
					// 		<input type="checkbox" id="saveStr" class="skillInput">
					// 		<label for="saveStr" class="skillLabel">
					// 			<span class="skillValue">10</span>
					// 			<span>SAVING THROWS</span>
					// 		</label>
					// 		<div class="saveThrowCheck"></div>
					// 	</div>
					// 	<div class="skillContain">
					// 		<input type="checkbox" id="athletics" class="skillInput">
					// 		<label for="athletics" class="skillLabel" >
					// 			<span class="skillValue">10</span>
					// 			<span>ATHLETICS</span>
					// 		</label>
					// 		<div class="skillCheck"></div>
					// 	</div>
					// </div>
