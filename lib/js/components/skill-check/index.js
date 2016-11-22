var xtag = require('x-tag');

var proto = {
	content: ['<input type="checkbox"></input>',
	'<label name="skill" content="10"></label>',
	'<div></div>'].join('')
};


xtag.register('throw-check',Object.assign({},proto));

xtag.register('skill-check',Object.assign({},proto));

module.exports = function(data) {
	var check = document.createElement(data.type);
};