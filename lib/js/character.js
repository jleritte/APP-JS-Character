var test = require('sheet');

var data = {
			page1:{
				type:'main',
				data:{
					head:{
						name: 'LoveNox',
						info: [
							{
								label: 'Class & Level',
								content: 'Rogue 1'
							},
							{
								label:'Background',
								content:'Charlaten'
							},
							{
								label:'Player Name',
								content:'Jonathan'
							},
							{
								label:'Race',
								content:'Human'
							},
							{
								label:'Alignment',
								content:'Chaotic Neutral'
							},
							{
								label:'Experience',
								content:'0'
							}
						]
					},
					body:{}
				}
			},
			page2:{
				type:'spell',
				data:{
						head:{
							name: 'Spicy',
							info: [
								{
									label:'Spellcasting Ability',
									content: 'Wis'
								},{
									label:'Spell Save DC',
									content: '14'
								},{
									label:'Spell Attack Bonus',
									content: '+4'
								}
							]
						},
						body: {}
					}
				}
			},
		sheet = test(data.page1),
		show = 1;

document.body.appendChild(sheet);
document.body.onclick = function(e) {
	if(show){
		this.replaceChild(test(data.page2),this.lastElementChild);
		show--;
	} else {
		this.replaceChild(test(data.page1),this.lastElementChild);
		show++;
	}
};