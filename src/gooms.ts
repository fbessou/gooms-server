import { Game } from "./core";

export class Gooms extends Game{
	constructor(rootELement: HTMLElement) {
		super(rootElement);
	}

	static create(rootElement: HTMLElement = document.getBody()){
		new Gooms(rootElement);
	}
}
