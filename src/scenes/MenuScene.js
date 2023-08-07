import BaseScene from './BaseScene';

class MenuScene extends BaseScene {
	constructor(config) {
		super('MenuScene', config);

		this.menu = [
			{ scene: 'PlayScene', text: 'Play' },
			{ scene: 'ScoreScene', text: 'Score' },
			{ scene: null, text: 'Exit' },
		];
	}

	create() {
		super.create();

		// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
		// this binds the context to be MenuScene
		// createMenu from 'BaseScene'
		this.createMenu(this.menu, this.setupMenuEvents.bind(this));
		// this.createMenu(this.menu, (menuItem) => this.setupMenuEvents(menuItem));
	}

	setupMenuEvents(menuItem) {
		// retrieve the text game object from the passed-in menu item
		const textGO = menuItem.textGO;
		// set the text game object as interactive so that we can set up some events on the text
		textGO.setInteractive();

		// set a pointer over (hover) event that sets the style->fill of the text (yellow)
		textGO.on('pointerover', () => {
			textGO.setStyle({ fill: '#ff0' });
		});

		// set a pointer out (remove pointer) event that sets the style->fill of the text (white)
		textGO.on('pointerout', () => {
			textGO.setStyle({ fill: '#fff' });
		});

		textGO.on('pointerup', () => {
			// check if menu item has such a scene, and if it does, call the scene's start function with the menu item's scene passed in as an arg
			menuItem.scene && this.scene.start(menuItem.scene);

			// destroy the canvas on 'Exit'
			if (menuItem.text === 'Exit') {
				this.game.destroy(true);
			}
		});
	}
}

export default MenuScene;

