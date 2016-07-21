import {GoodBye} from "./other"
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
