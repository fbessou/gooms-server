import {
	SystemRenderer,
	autoDetectRenderer
} from "pixi.js";

import {
	GameState,
	GameStateStack
} from "./gamestate"

export abstract class Game {

	private states: GameStateStack = new GameStateStack();
	private renderer: SystemRenderer;

	constructor(rootElement: HTMLElement) {
		this.renderer = autoDetectRenderer(800,600);
		this.renderer.backgroundColor = 0x221541;
		rootElement.appendChild(this.renderer.view);

		requestAnimationFrame(() => {this.loop()});
	}

	pushState(state: GameState) {
		this.states.push(state);
	}

	loop() {
		this.update();
		this.render();
		requestAnimationFrame(() => {this.loop()});
	}
	
	update() { }

	render() {
		this.states.render(this.renderer);
	}
}
