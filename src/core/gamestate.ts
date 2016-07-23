import {
	Container,
	SystemRenderer
} from "pixi.js";

import { Game } from "./game";

export abstract class GameState {
	container: Container = new Container;
	renderBelow : boolean = false;

	constructor(private game: Game, options: any = {}) {
		if(options.renderBelow !== undefined)
			this.renderBelow = options.renderBelow;
	}

	enter() { };

	leave() { };

	update() { };

	render(renderer: SystemRenderer) {
		renderer.render(this.container);
	}

}

export class GameStateStack {
	private states: GameState[] = [];

	push(newState: GameState) {
		this.states.push(newState);
	}

	pop() {
		return this.states.pop();
	}

	clear() {
		this.states = [];
	}

	size() {
		return this.states.length
	}

	top() {
		if(this.empty()){
			return this.states[this.states.length -1]
		}
	}

	empty() {
		return this.states.length === 0; 
	}
	
	render(renderer: SystemRenderer) {
		if (!this.empty()) {
			this._renderImpl(renderer, this.size() - 1)
		}
	}

	private _renderImpl(renderer: SystemRenderer, stateIndex: number) {
		if (stateIndex > 0 && this.states[stateIndex -1].renderBelow) {
			this._renderImpl(renderer, stateIndex - 1);
		}
		this.states[stateIndex].render(renderer);
	}
}


