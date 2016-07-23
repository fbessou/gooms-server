import { GoodBye } from "./other";
import { Container } from "pixi.js";

class Hello {
	private data:number;

	constructor() {
		this.data = 42;
	}

	coucou() {
		console.log(this.data+"..." );
	}
}

let machin = new Hello();
let autre = new GoodBye();
machin.coucou();
autre.bye();
