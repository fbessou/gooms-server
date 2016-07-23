import {
	SystemRenderer,
	autoDetectRenderer
} from "pixi.js";

import { GameState } from "./gamestate"

export abstract class Game {

	private states: GameState[] = [];
	private renderer: SystemRenderer;

	constructor(rootElement: HTMLElement) {
		this.renderer = autoDetectRenderer(800,600);
		this.renderer.backgroundColor = 0x112255;
		rootElement.appendChild(this.renderer.view);
	}

	pushState(state: GameState) {
		this.states.push(state);
	}

	render() {
		this.states[this.states.length - 1].render(this.renderer);
	}
}
