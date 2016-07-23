import { Game } from "./core";
import { MainMenu } from "./mainmenu";

export class Gooms extends Game{
	constructor(rootElement: HTMLElement) {
		super(rootElement);
		this.pushState(new MainMenu(this));
	}

	static create(rootElement: HTMLElement = document.body){
		new Gooms(rootElement);
	}
}
