import {
	SystemRenderer,
	autoDetectRenderer
} from "pixi.js";

import { GameState } from "./gamestate"

export abstract class Game {
	constructor(rootElement: HTMLElement, startState: GameState) {
		this.renderer = autoDetectRenderer();
		this.renderer.setBackgroundColor(0x112255);
		this.rootElement.appendChild(this.renderer.view);
	}
	private states: GameState[];
	private renderer: SystemRenderer;
}
