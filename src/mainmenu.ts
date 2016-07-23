import { Graphics } from "pixi.js"
import { Game, GameState } from "./core";

export class MainMenu extends GameState {
	
	constructor(game: Game) {
		super(game);
		let test = new Graphics();
		test.lineStyle(4, 0x10fa01,1);
		test.drawCircle(10,10,50);
		this.container.addChild(test);
	}

	update() {
	
	}

	enter() {
	
	}

	leave() {
	
	}

}
