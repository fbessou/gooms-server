import { Game } from "./game";

export abstract class GameState {
	constructor(private game: Game) { }
	enter() { };
	leave() { };
	update() { };
}
