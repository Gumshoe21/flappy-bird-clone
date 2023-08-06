import BaseScene from './BaseScene';

class PauseScene extends BaseScene {
	constructor(config) {
		super('PauseScene', config);

		this.menu = [
			{ scene: 'PlayScene', text: 'Continue' },
			{ scene: 'MenuScene', text: 'Exit' },
		];
	}

	create() {
		super.create();
		this.createMenu(this.menu, this.setupMenuEvents.bind(this));
	}

	setupMenuEvents(menuItem) {
		const textGO = menuItem.textGO;
		textGO.setInteractive();

		textGO.on('pointerover', () => {
			textGO.setStyle({ fill: '#ff0' });
		});

		textGO.on('pointerout', () => {
			textGO.setStyle({ fill: '#fff' });
		});

		textGO.on('pointerup', () => {
			// if there's a scene, and menu text is 'Continue' and we click on it
			if (menuItem.scene && menuItem.text === 'Continue') {
				// Shutting down the Pause Scene and resuming the Play Scene
				this.scene.stop(); //shutdown current scene
				// resume scene running in parallel -PlayScene
				this.scene.resume(menuItem.scene);
			} else {
				// Shutting PlayScene, PauseScene and running Menu
				this.scene.stop('PlayScene');
				// if the menuItem scene is not 'PlayScene', then it must be 'PauseScene', so start it. we know it is 'PauseScene' if we got to this point in the code because we already verified that menuItem.text is NOT 'Continue', and if that's the case, then the text is 'Exit' and the scene is therefore 'MenuScene'
				this.scene.start(menuItem.scene);
			}
		});
	}
}

export default PauseScene;
