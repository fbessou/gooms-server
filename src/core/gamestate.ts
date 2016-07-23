import {
	Container,
	SystemRenderer
} from "pixi.js";

import { Game } from "./game";

export abstract class GameState {
	private container: Container = new Container;
	private renderBelow : boolean = false;

	constructor(private game: Game) { }
	enter() { };
	leave() { };
	update() { };

	render(renderer: SystemRenderer) {
		renderer.render(this.container);
	}

}
