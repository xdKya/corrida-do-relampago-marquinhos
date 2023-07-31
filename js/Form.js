class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./assets/TITULO.png", "nome do jogo");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  display() {
    this.titleImg.position(60, 50);
    this.titleImg.class("gameTitle");

    this.input.position(width / 2, height / 2);
    this.input.class("customInput");

    this.greeting.position(width / 2, height / 2);
    this.greeting.class("greeting");

    this.playButton.position(width / 2, height / 2 + 50);
    this.playButton.class("customButton");
  }
}
