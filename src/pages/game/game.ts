import Page from '../../core/templates/page';
import EngineGame from './engineGame';

class Game extends Page {
  static clickStop: number;

  static startTimer: ReturnType<typeof setTimeout>;

  static getZero(num: number): string {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    }
    return `${num}`;
  }

  static untouchableCards(cardBox: NodeList, check: number): void {
    if (check === 0) {
      cardBox.forEach((items) => {
        (items as HTMLElement).style.cssText = 'pointer-events: none;';
      });
    } else if (check === 1) {
      cardBox.forEach((item) => {
        if (!((item as HTMLElement).classList.contains('finish'))) {
          (item as HTMLElement).style.cssText = '';
        }
      });
    }
  }

  static GameTimer(stopBtn: Element, cardBox: NodeList, Minutes: Element, Seconds: Element): void {
    const Timer = setInterval(() => {
      const secondTimer = Number(Seconds.textContent) - 1;
      if (secondTimer === -1) {
        Seconds.innerHTML = Game.getZero(1);
        Game.StartGameTimer(cardBox, Minutes, Seconds);
        clearInterval(Timer);
      } else {
        Seconds.innerHTML = this.getZero(secondTimer);
      }
    }, 1000);
    setTimeout(() => {
      stopBtn.addEventListener('click', () => {
        if (this.clickStop % 2 === 0) {
          this.clickStop++;
          Game.untouchableCards(cardBox, 0);
          clearInterval(Game.startTimer);
        } else {
          this.clickStop++;
          Game.untouchableCards(cardBox, 1);
          Game.StartGameTimer(cardBox, Minutes, Seconds);
        }
      });
    }, 30000);
  }

  static StartGameTimer(cardBox: NodeList, Minutes: Element, Seconds: Element): void {
    Game.startTimer = setInterval(() => {
      const secondTimer = Number(Seconds.textContent) + 1;
      if (secondTimer === 60) {
        const minutesTimer = Number(Minutes.textContent) + 1;
        Minutes.innerHTML = Game.getZero(minutesTimer);
        Seconds.innerHTML = Game.getZero(0);
      } else {
        Seconds.innerHTML = Game.getZero(secondTimer);
      }
      if (EngineGame.varTimer === 1) {
        clearInterval(Game.startTimer);
      }
    }, 1000);
  }

  render(): HTMLElement {
    const actualPage = Page.createActualPage(`<div class="game">
    <div class="game-timer">
      <span class="game-minutes">00</span>
      <span>:</span>
      <span class="game-seconds">30</span>
    </div>
    <div class="game-container">
      <div class="cards-field">
      </div>
    </div>
  </div>`);
    Game.clickStop = 0;
    const cardField = actualPage.querySelector('.cards-field');
    if (cardField) {
      EngineGame.renderPage(cardField);
    }
    const btnStop = document.querySelector('.header-stopGame');
    const cardContainer = actualPage.querySelectorAll('.card-container');
    const gameMin = actualPage.querySelector('.game-minutes');
    const gameSec = actualPage.querySelector('.game-seconds');

    const card = actualPage.querySelectorAll('.card');
    if (btnStop && gameMin && gameSec) {
      Game.GameTimer(btnStop, cardContainer, gameMin, gameSec);
    }

    EngineGame.flipAllCards(cardContainer, card);
    if (cardField) {
      EngineGame.compareCards(cardField, cardContainer, Game.clickStop);
    }
    this.container.append(actualPage);
    return this.container;
  }
}

export default Game;
