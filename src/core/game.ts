import {
	SystemRenderer,
	autoDetectRenderer
} from "pixi.js";

import { GameState } from "./gamestate"

export abstract class Game {
	constructor(rootElement: HTMLElement) {
		this.renderer = autoDetectRenderer(800,600);
		this.renderer.backgroundColor = 0x112255;
		rootElement.appendChild(this.renderer.view);
	}

	pushState(state: GameState) {
		this.states.push(state);
	}

	private states: GameState[];
	private renderer: SystemRenderer;
}
