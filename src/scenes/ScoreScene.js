import BaseScene from './BaseScene';

class ScoreScene extends BaseScene {
	constructor(config) {
		super('ScoreScene', config);
	}

	create() {
		super.create();
		// Retrieve best score from local storage
		const bestScore = localStorage.getItem('bestScore');
		// Add best score text that displays either best score or 0 if there's no best score
		this.add.text(...this.screenCenter, `Best Score: ${bestScore || 0}`, this.fontOptions).setOrigin(0.5);
	}
}

export default ScoreScene;
